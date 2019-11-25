class KeyBoardHandler {
    constructor() {
        this.listeners = new WeakMap();
    }

    once(key, handler) {
        const listener = (evt) => {
            const keyName = evt.code;
            
            console.log(keyName);

            if (keyName == key) {
                this.remove(handler);
                handler();
            }
        };
        this.listeners.set(handler, listener);
        document.addEventListener("keyup", listener);
    }

    remove(handler) {
        if (this.listeners.has(handler)) {
            const listener = this.listeners.get(handler);
            document.removeEventListener("keyup", listener);
            this.listeners.delete(handler);
        }
    }
}

export default KeyBoardHandler;