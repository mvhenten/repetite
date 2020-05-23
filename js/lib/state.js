/* global EventTarget, CustomEvent */

class AppState extends EventTarget {
    on(eventName, listener) {
        this.addEventListener(eventName, listener);
    }

    once(eventName, onlyOnce) {
        const listener = (evt) => {
            this.removeEventListener(eventName, listener);
            onlyOnce(evt);
        };

        this.addEventListener(eventName, listener);
    }
    
    emit(name, detail) {
        let event = new CustomEvent(name, {detail});
        this.dispatchEvent(event);
    }
}

export default AppState;