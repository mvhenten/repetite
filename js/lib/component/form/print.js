import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class PrintView extends Component {
    state = { value: "" }

    constructor({ appState, assignment, settings }) {
        super();
        console.log(assignment);
        this.assignment = assignment;
    }
    
    renderWords() {
        let { words } = this.assignment;
        
        return words.map((word, idx) => html `
            <tr>
                <td class="question">${word[0]}</td>
                <td>${word[1]}</td>
                <td>⇾</td>
            </tr>
        `);
    }

    render() {
        let { selected } = this.assignment;
        
        return html `
    <table class="wordlist">
        <tr>
            <th colspan=3>${selected}</th>
        </tr>
        ${this.renderWords()}
    </table>


    `;    }
}

export default PrintView;
