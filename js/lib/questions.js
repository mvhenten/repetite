class Questions {
    constructor(questions) {
        this._questions = questions;
        this._queue = Array.from(questions);
        this._failed = new Set();
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
        return this.last;
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