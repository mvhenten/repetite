import AppState from "../state.js";
import KeyboardState from "./keyboard.js";
import Speech from "./speech.js";
import Questions from "./questions.js";


const TIMEOUT = 5000;

class QuizzState extends AppState {
    constructor(assignment, settings) {
        super();

        this.assignment = assignment;
        this.settings = settings;
    }
    
    get timeout() {
        if (this.settings.speed == 0)
            return null;
        
        return TIMEOUT / this.settings.speed;
    }
    
    get questions() {
        const { words, mode } = this.assignment;
        
        if (!this._questions) {
            this._questions = new Questions(words, mode);
            
        }
        
    }

    get keyboard() {
        if (!this.keyBoardState) {
            this.keyBoardState = new KeyboardState();
        }

        return this.keyBoardState;
    }
    
    get speech() {
        if (!this.speech) {
            let lang = "nl-NL";
            this.speech = new Speech(lang);
        }
        
        return this.speech;
    }

    cancel() {
        clearTimeout(this._timeout);
    }

    scheduleNext() {
        this.cancel();

        this.keyboard.once("keydownSpace", () => {
            this.emitNextQuestion();
            this.cancel();
        });

        if (this.speed !== 0) {
            this._timeout = setTimeout(() => {
                this.emitNextQuestion();
            }, this.timeout);
        }
    }

    emitNextQuestion() {
        this.emit("nextQuestion");
    }
}

export default QuizzState;