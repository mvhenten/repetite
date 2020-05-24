import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class AnswerForm extends Component {

    constructor({ onSubmit }) {
        super();
        this.state = {};
        this.doOnSubmit = onSubmit;
    }

    onChange = (evt) => {
        const { value } = evt.target;
        this.setState({ value });
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.doOnSubmit(this.state);
    }

    componentDidMount() {
        this.el.focus();
    }

    render({ onSubmit }) {
        return html `
        <form id=${Math.random()} onSubmit=${this.onSubmit} class="answers">
            <input value=${this.state.value} 
                ref=${i => this.el = i} id=${Math.random()} 
                onInput=${this.onChange} 
                autoFocus="true" type="text" 
                autocomplete="off" 
                autocorrect="off" 
                autocapitalize="off" 
                spellcheck="false" 
                name="answer" 
                placeholder="antwoord" />
        </form>
    `;
    }
}

export default AnswerForm;
