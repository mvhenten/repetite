import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

import ElementContainer from "./container.js";


class AssignmentsForm extends Component {
    render() {
        return html `
            <form id="assignments">
                <label>
                    Select            
                    <select id="assignments-assignment" name="assignment"></select>
                </label>
                <div class="text-medium padding-1 spaced-2x">
                    <label for="mode-test">
                        <input id="mode-test" checked name="mode" value="test" type="radio" />
                        Testen
                    </label>
                    <label for="mode-practice">
                        <input id="mode-practice" name="mode" value="practice" type="radio" />
                        Oefenen
                    </label>
                </div>
                <input type="submit" value="start" />
            </form>
        `;
    }

}

const answers = () => {
    return html `
        <form id="answers">
            <input autoFocus type="text" autocomplete="off" name="answer" placeholder="antwoord" />
        </form>
    `;
};

const settings = () => {
    return html `
        <form id="settings">
            <label for="timeout">
                snelheid:
                <input value="5" min="1" max="10" type="number" name="timeout" id="settings-timeout" />
            </label>
            <input type="submit" value="start" />
        </form>
    `;
};



class AppContainer extends ElementContainer {
    constructor(selector, questions) {
        super(selector);
        // this._questions = questions;
    }

    render() {
        return html `
        <div>
            <div class="pull-right spaced-2x">
                <a id="nightlink" href="#dark">🌙 night mode</a>
                <a id="homelink" href="../index.html"> 🏠 Home</a>
            </div>
            <h4 id="progress">
            </h4>
        
            <div class="container">
                <h1 id="finish">bravo</h1>
                <h3 id="help"></h3>
                <h3 id="questions"></h3>
                <${AssignmentsForm} />
                ${settings()}
                ${answers()}
            </div>
            </div>
        `;
    }
}

export default AppContainer;
