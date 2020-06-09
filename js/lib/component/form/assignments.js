import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

const RadioButton = ({ name, checked, label, value, onChange }) => {
    const attr = {
        id: [name, value].join("-"),
        name,
        value,
        type: 'radio',
        onChange,
    };

    if (value == checked)
        attr.checked = "checked";

    return html `
        <label for="${attr.id}">
            <input ...${attr} />
            ${label || name}
        </label>
    `;
};


class AssignmentsForm extends Component {

    constructor({ assignments, appState }) {
        super();
        this.state = { value: "" };
        this.appState = appState;
        this.assignments = assignments;
    }

    get selected() {
        let { value } = this.state;
        return value || this.options[0];
    }

    get options() {
        return Array.from(this.assignments.keys);
    }

    get mode() {
        return this.state.mode || "test";
    }

    onSubmit = e => {
        e.preventDefault();

        const { mode, selected } = this;
        const words = this.assignments.getWords(selected);

        this.appState.emit("selectAssignment", { mode, selected, words });
    }

    onSelectAssignment = evt => {
        const { value } = evt.target;
        this.setState({ value });
    }

    onSetMode = evt => {
        const { value } = evt.target;
        this.setState({ mode: value });
    }

    render() {
        return html `
            <form onSubmit=${this.onSubmit} id="assignments">
                <label>
                    Select            
                    <select onChange=${this.onSelectAssignment} id="assignments-assignment" name="assignment">
                    ${this.options.map((header) => {
                        return html `<option value=${header}>${header}</option>`;
                    })}
                    </select>
                </label>
                <div class="text-medium padding-1 spaced-2x">
                    <${RadioButton} name="mode" value="test" checked=${this.mode} onChange=${this.onSetMode} label="Testen" />
                    <${RadioButton} name="mode" value="practice" checked=${this.mode} onChange=${this.onSetMode} label="Oefenen" />
                    <${RadioButton} name="mode" value="print" checked=${this.mode} onChange=${this.onSetMode} label="Print" />
                </div>
                <input type="submit" value="start" />
            </form>
        `;
    }
}

export default AssignmentsForm;
