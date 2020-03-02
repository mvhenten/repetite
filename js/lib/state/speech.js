import AppState from "../state.js";

class Speech extends AppState {
    constructor({lang}) {
        super();

        if (!('speechSynthesis' in window))
            return;
            
        this.config = {lang};

        this.speech.onvoiceschanged = () => {
            this.getVoices();
        };
    }

    get speech() {
        return window.speechSynthesis;
    }

    get voices() {
        if (!this._voices)
            this.getVoices();

        return this._voices;
    }

    getVoices() {
        if (this.speech) {
            this._voices = this.speech.getVoices();
        }
        return this._voices;
    }

    speak(words) {
        const speech = new SpeechSynthesisUtterance(words);
        
        speech.addEventListener("end", this.onSpeechEnd.bind(this));

        speech.rate = 0.9;
        speech.lang = this.config.lang;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }
    
    onSpeechEnd(evt) {
        evt.utterance.removeEventListener("end", this.onSpeechEnd.bind(this));
        this.emit("speechEnd");
    }
}

export default Speech;