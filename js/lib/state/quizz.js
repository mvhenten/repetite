import AppState from "../state.js";
import KeyboardState from "./keyboard.js";

const TIMEOUT = 5000;

class QuizzState extends AppState {
    constructor(speed) {
        super();
        
        console.log("speed", speed);

        this.speed = speed;
        this.timeout = TIMEOUT / this.speed;
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
                this.emit("nextQuestion");
            }, this.timeout);
        }
    }

    emitNextQuestion() {
        this.emit("nextQuestion");
    }
}

export default QuizzState;