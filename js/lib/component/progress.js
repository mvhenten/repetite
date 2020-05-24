import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';


class ProgressContainer extends Component {

    constructor({ assignments, appState, settings }) {
        super();

        appState.on("nextQuestion", ({detail}) => {
            this.setState({questions: detail});
        });
    }

    render() {
        let state = this.state;
        
        if (!state.questions)
            return;
            
        const { total, correct, len, failed } = state.questions;
        

        return html`<h4>Total ${total}, ok ${correct}, left ${len}, error: ${failed}</h4>`;
    }
}

export default ProgressContainer;