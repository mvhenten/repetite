import AppState from "../state.js";
import KeyboardState from "./keyboard.js";

const TIMEOUT = 5000;

class QuizzState extends AppState {
    constructor(speed) {
        super();
        
        this.speed = parseInt(speed, 10);
    }
    
    get timeout() {
        return TIMEOUT / this.speed;
    }

    get keyboard() {
        if (!this.keyBoardState) {
            this.keyBoardState = new KeyboardState();
        }

        return this.keyBoardState;
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