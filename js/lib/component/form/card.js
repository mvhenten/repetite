import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import QuizzState from "../../state/quizz.js";
import Questions from "../../questions.js";


const Card = ({ question, answer, flipped, onClick }) => {
    return html`
        <div class="flip-card-scene">
          <div onClick=${onClick} class="flip-card ${flipped ? "":"flipped"}">
            <div class="flip-card-face flip-card-face-front">${question}</div>
            <div class="flip-card-face flip-card-face-back">${flipped ? "": answer}</div>
          </div>
        </div>
    `;
};

class CardForm extends Component {
    state = {}

    constructor({ appState, assignment }) {
        super();

        const { words, mode } = assignment;

        this.questions = new Questions(words, mode);
        this.quizzState = new QuizzState(0);

        this.quizzState.on("nextQuestion", () => {
            this.onNextQuestion();
        });
    }

    onClick = ({}) => {
        console.log("onclick");
        this.onNextQuestion();
    }

    onNextQuestion() {
        const { state, questions } = this;
        const [question] = questions.current;
        
        console.log(question);
        
        if (state.question) {
            questions.pop();
            this.setState({ question: null  });
            return;   
        }

        this.setState({ question,  });
    }

    render() {
        const { state, questions } = this;
        const [question, answer] = questions.current;

        switch (true) {
            case !questions.len:
                return html `<h3 id="question"><a href="">done</a> </h3>`;
            case !!state.question:
                this.quizzState.scheduleNext();
                return html`<${Card} onClick=${this.onClick} question=${question} answer=${answer} />`;
            default:
                this.quizzState.scheduleNext();
                return html`<${Card} onClick=${this.onClick} question=${question} answer=${answer} flipped=${true}/>`;
        }
    }
}

export default CardForm;
