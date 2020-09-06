import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import QuizzState from "../../state/quizz.js";
import Questions from "../../questions.js";
import AnswerForm from "./answer.js";

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


class QuizzForm extends Component {
    state = { value: "" }

    constructor({ appState, assignment, settings }) {
        super();

        const { words, mode } = assignment;
        const { speed } = settings;

        this.questions = new Questions(words, mode);
        this.quizzState = new QuizzState(speed);
        this.appState = appState;
        this.settings = settings;
        this.quizzState.on("nextQuestion", () => {
            appState.emit("nextQuestion", this.questions);
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
                return html `<h3 id="question">${question}</h3>`;
        }
    }
}

export default QuizzForm;
