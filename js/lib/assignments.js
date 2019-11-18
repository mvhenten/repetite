
class Assignments {
    constructor(raw) {
        this._raw = raw;
    }

    get assignments() {
        if (!this._assignments) {
            this._assignments = this._build_assignments();
        }
        return this._assignments;
    }

    get keys() {
        return this.assignments.keys();
    }

    getWords(key) {
        return this.assignments.get(key);
    }

    _build_assignments() {
        let lines = this._raw.split(/\n/);
        let cur = null;
        let assignments = new Map();

        for (let line of lines) {
            line = line.trim();
            if ("" == line) continue;

            if (/^;/.test(line)) {
                let header = line.slice(1).trim();
                cur = [];
                assignments.set(header, cur);
                continue;
            }

            let pair = line.split(/--/).map(w => w.trim());
            cur.push(pair);
        }
        return assignments;
    }
}

export default Assignments;