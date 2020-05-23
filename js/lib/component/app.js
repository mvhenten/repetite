import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import AssignmentsForm from "./form/assignments.js";
import QuizzForm from "./form/quizz.js";


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
