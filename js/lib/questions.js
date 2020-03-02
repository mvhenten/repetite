class Questions {
    constructor(questions, mode) {
        this._questions = questions;
        this._queue = Array.from(questions);
        this._failed = new Set();
        this._practice = mode == "practice";
        this._dictation = mode == "dictation";
        this._retry = 0;
    }

    get total() {
        return this._questions.length;
    }

    get correct() {
        return this.total - this.len;
    }

    get len() {
        return this._queue.length;
    }

    get last() {
        return this._queue[this.len - 1];
    }

    get current() {
        if (!this.len) return [];
        
        let [question, answer] = this.last;
        
        if (this._practice) {
            question = `${question}: ${answer}`;
        }

        if (this._dictation) {
            question = [answer, answer];
        }

        return [question, answer];
    }
    
    get failed() {
        return this._failed.size;
    }
    
    get retries() {
        return this._retry;
    }
    
    get score() {
        let { total, failed, retries } = this;
        
        if (!failed) return 1;
        
        const factor = retries / failed;
        const error = failed * factor;
        const score =  (total - error) / total;

        return score;
    }

    unShiftCurrent() {
        let current = this.current;
        
        this._failed.add(current);
        this._retry++;
        this._queue.pop();
        this._queue.unshift(current);
    }

    pop() {
        this._queue.pop();
    }

    isValid(answer) {
        const [, validAnswer] = this.current;
        return answer == validAnswer;

    }
}

export default Questions;