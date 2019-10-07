import ElementContainer from "./container.js";

class ProgressContainer extends ElementContainer {
    constructor(selector, questions) {
        super(selector);
        this._questions = questions;
    }

    render() {
        const { total, correct, len, failed } = this._questions;
        this.update(`Total ${total}, correct ${correct}, reste ${len}, erreur: ${failed}`);
    }
}

export default ProgressContainer;