import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

import ElementContainer from "./container.js";

import FormContainer from "./form.js";

const AssignmentsForm = ({assignments}) => {
        const options = Array.from(assignments.keys);
        
        const assignmentsFormContainer = new FormContainer("#assignments");


        const onSelectAssignment = () => {
            const selected = assignmentsFormContainer.getValue("assignment");
            const mode = assignmentsFormContainer.getValue("mode");
            const words = assignments.getWords(selected);
        };
        
        return html `
            <form onSubmit=${onSelectAssignment} id="assignments">
                <label>
                    Select            
                    <select id="assignments-assignment" name="assignment">
                    ${options.map((header) => {
                        return html `<option value=${header}>${header}</option>`;
                    })}
                    </select>
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

};

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
    constructor({assignments}) {
        super();
        this.state = {assignments};
    }

    render() {
        const toggleDarkMode = () => {
            document.body.classList.toggle("night");
        };
        
        return html `
        <div>
            <div class="pull-right spaced-2x">
                <a onClick=${toggleDarkMode} id="nightlink" href="#dark">🌙 night mode</a>
                <a id="homelink" href="../index.html"> 🏠 Home</a>
            </div>
            <h4 id="progress">
            </h4>
        
            <div class="container">
                <h1 id="finish">bravo</h1>
                <h3 id="help"></h3>
                <h3 id="questions"></h3>
                <${AssignmentsForm} assignments=${this.state.assignments} />
                ${settings()}
                ${answers()}
            </div>
            </div>
        `;
    }
}

export default AppContainer;
