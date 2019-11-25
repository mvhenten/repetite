import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js';

import AppContainer from "./lib/component/app.js";
import AppState from "./lib/state.js";

import fr from "./data/fr.js";
import en from "./data/en.js";
import nl from "./data/nl.js";

const lang = document.location.pathname.slice(-13, -11);
const assignments = {fr, en, nl};

const init = (assignments) => {
    if (!assignments) return;
    
    const appState = new AppState();
    render(html`<${AppContainer} ...${{assignments, appState}} />`, document.body);
};

init(assignments[lang]);