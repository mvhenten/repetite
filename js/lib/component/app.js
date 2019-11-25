import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import QuizzState from "../state/quizz.js";
import Questions from "../questions.js";



const RadioButton = ({ name, checked, label, value, onChange }) => {
    const attr = {
        id: [name, value].join("-"),
        name,
        value,
        type: 'radio',
        onChange,
    };

    if (value == checked)
        attr.checked = "checked";

    return html `
        <label for="${attr.id}">
            <input ...${attr} />
            ${label || name}
        </label>
    `;
};

const Score = ({ questions }) => {
    const { score } = questions;

    const scoreText = () => {
        const mots = {
            "Keep practicing": 0.15,
            "Not good": 0.25,
            "Not enough yet": 0.35,
            "You can do better": 0.45,
            "Almost there": 0.55,
            "Not bad": 0.65,
            "One more time": 0.75,
            "Pretty good": 0.85,
            "Excellent": 0.95,
            "Perfect": 1
        };

        for (let key in mots) {
            let minScore = mots[key];

            if (minScore < score)
                continue;

            return `score: ${Math.round(score*100)}% - ${key}`;
        }

    };

    return html `<h1>${scoreText()}</h1>`;
};


class AssignmentsForm extends Component {
    state = { value: "" }

    constructor({ assignments, appState }) {
        super();
        this.appState = appState;
        this.assignments = assignments;
    }

    get selected() {
        let { value } = this.state;
        return value || this.options[0];
    }

    get options() {
        return Array.from(this.assignments.keys);
    }

    get mode() {
        return this.state.mode || "test";
    }

    onSubmit = e => {
        e.preventDefault();

        const { mode, selected } = this;
        const words = this.assignments.getWords(selected);

        this.appState.emit("selectAssignment", { mode, selected, words });
    }

    onSelectAssignment = evt => {
        const { value } = evt.target;
        this.setState({ value });
    }

    onSetMode = evt => {
        const { value } = evt.target;
        this.setState({ mode: value });
    }

    render() {
        return html `
            <form onSubmit=${this.onSubmit} id="assignments">
                <label>
                    Select            
                    <select onChange=${this.onSelectAssignment} id="assignments-assignment" name="assignment">
                    ${this.options.map((header) => {
                        return html `<option value=${header}>${header}</option>`;
                    })}
                    </select>
                </label>
                <div class="text-medium padding-1 spaced-2x">
                    <${RadioButton} name="mode" value="test" checked=${this.mode} onChange=${this.onSetMode} label="Testen" />
                    <${RadioButton} name="mode" value="practice" checked=${this.mode} onChange=${this.onSetMode} label="Oefenen" />
                </div>
                <input type="submit" value="start" />
            </form>
        `;
    }
}


class AnswerForm extends Component {
    state = {};

    constructor({ onSubmit }) {
        super();
        this.doOnSubmit = onSubmit;
    }

    onChange = (evt) => {
        const { value } = evt.target;
        this.setState({ value });
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.doOnSubmit(this.state);
    }

    componentDidMount() {
        this.el.focus();
    }

    render({ onSubmit }) {
        return html `
        <form id=${Math.random()} onSubmit=${this.onSubmit} class="answers">
            <input value=${this.state.value} 
                ref=${i => this.el = i} id=${Math.random()} 
                onInput=${this.onChange} 
                autoFocus="true" type="text" 
                autocomplete="off" 
                autocorrect="off" 
                autocapitalize="off" 
                spellcheck="false" 
                name="answer" 
                placeholder="antwoord" />
        </form>
    `;
    }
}


class QuizzForm extends Component {
    state = { value: "" }

    constructor({ appState, assignment, settings }) {
        super();

        const { words, mode } = assignment;
        const { speed } = settings;

        console.log("settings", settings);

        this.questions = new Questions(words, mode);
        this.quizzState = new QuizzState(speed);
        this.appState = appState;
        this.settings = settings;
        this.quizzState.on("nextQuestion", () => {
            this.onNextQuestion();
        });
    }

    onSubmit = ({ value }) => {
        const { questions } = this;
        const [, answer] = questions.current;

        this.clearState();

        if (value != answer) {
            questions.unShiftCurrent();
            this.setState({ error: answer });
            return;
        }

        questions.pop();
    }

    clearState() {
        let state = this.state;

        for (let key in state) {
            state[key] = null;
        }

        this.setState(state);
    }

    onNextQuestion() {
        const { state, questions } = this;
        const [question] = questions.current;

        if (state.error) {
            this.clearState();
            return;
        }

        this.setState({ question });
    }

    render() {
        const { state, questions } = this;
        const [question] = questions.current;

        switch (true) {
            case !questions.len:
                return html `<${Score} questions=${questions} />`;
            case !!state.question:
                return html `<${AnswerForm} onSubmit=${this.onSubmit} />`;
            case !!state.error:
                this.quizzState.scheduleNext();
                return html `<h3 id="help">${state.error}</h3>`;
            default:
                this.quizzState.scheduleNext();
                return html `<h3 id="questions">${question}</h3>`;
        }
    }
}


const Settings = ({ appState }) => {
    let state = { speed: 5 };

    let onSubmit = e => {
        e.preventDefault();
        appState.emit("setAssignmentSettings", state);
    };

    let onChange = e => {
        state.speed = e.target.value;
    };

    return html `
        <form id="settings" onSubmit=${onSubmit}>
            <label for="timeout">
                snelheid:
                <input onChange=${onChange} value="${state.speed}" min="0" max="10" type="number" name="timeout" id="settings-timeout" />
            </label>
            <input type="submit" value="start" />
        </form>
    `;
};

class AppContainer extends Component {
    state = { value: "" }

    constructor({ assignments, appState }) {
        super();

        this.appState = appState;
        this.assignments = assignments;

        this.appState.on("selectAssignment", (evt) => {
            this.setState({ assignment: evt.detail });
        });

        this.appState.on("setAssignmentSettings", (evt) => {
            this.setState({ settings: evt.detail });
        });

        // debug
        // let selected = Array.from(this.assignments.keys)[0];
        // const words = assignments.getWords(selected);

        // this.appState.emit("selectAssignment", { mode: "test", selected, words });
        // this.setState({ settings: {} });
    }

    renderBody() {
        const { appState, assignments } = this;
        const { assignment, settings } = this.state;

        console.log("state", this.state);

        switch (true) {
            case !!settings:
                return html `<${QuizzForm} ...${{appState, settings, assignment}}/>`;
            case !!assignment:
                return html `<${Settings} ...${{appState}} />`;
            default:
                return html `<${AssignmentsForm} ...${{appState, assignments}} />`;
        }
    }

    render() {
        const toggleDarkMode = () => {
            document.body.classList.toggle("night");
        };

        return html `
            <div>
                <div class="pull-right spaced-2x">
                    <a onClick=${toggleDarkMode} id="nightlink" href="#dark">🌙 night mode</a>
                    <a id="homelink" href="../index.html"> 🏠 Home</a>
                </div>
                <h4 id="progress">
                </h4>
            
                <div class="container">
                    ${this.renderBody()}
                </div>
            </div>
        `;
    }
}

export default AppContainer;
