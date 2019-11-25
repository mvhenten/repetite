import AppState from "../state.js";

class KeyboardState extends AppState {
    constructor() {
        super();
        
        let keyEventName = "keydown";

        document.addEventListener(keyEventName, (evt) => {
            this.emitKey(keyEventName, evt);
        });
    }
    
    emitKey(keyEventName, evt) {
        let keyName = evt.code;
        
        keyName = keyName[0].toUpperCase() + keyName.slice(1);
        this.emit(`${keyEventName}${keyName}`, evt);
    }
}

export default KeyboardState;