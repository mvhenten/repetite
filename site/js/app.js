import { h, Component, render } from './vendor/preact.js';

import Questions from "./lib/questions.js";
import ElementContainer from "./lib/component/container.js";
import FormContainer from "./lib/component/form.js";
import ProgressContainer from "./lib/component/progress.js";
import FinishContainer from "./lib/component/finish.js";
import KeyBoardHandler from "./lib/component/keyboard.js";




const formContainer = new FormContainer("#answers");
const settingsContainer = new FormContainer("#settings");
const questionContainer = new ElementContainer("#questions");
const helpContainer = new ElementContainer("#help");
const finishContainer = new FinishContainer("#finish");
const assignmentsFormContainer = new FormContainer("#assignments");

import assignments from "./data/fr.js";


// Create your app
const app = h('div', null, 'Hello World!');

// class App extends Component {
//   render() {
//     return <h1>Hello, world!</h1>;
//   }
// }

// Inject your application into the an element with the id `app`.
// Make sure that such an element exists in the dom ;)
render(app, document.body);


const init = () => {
    const select = document.querySelector("#assignments-assignment");

    for (let header of assignments.keys) {
        let option = document.createElement("option");
        option.innerText = header;
        option.value = header;
        select.appendChild(option);
    }


    assignmentsFormContainer.onSubmitOnce(() => {
        const selected = assignmentsFormContainer.getValue("assignment");

        const words = assignments.getWords(selected);
        assignmentsFormContainer.hide();

        quizz(words);
    });

    return;
};

init();

const quizz = (words) => {
    let timeout = 5000;
    let speed = 2;

    const questions = new Questions(words);
    const progressContainer = new ProgressContainer("#progress", questions);
    const keyboard = new KeyBoardHandler();
    settingsContainer.show();

    const showForm = (questions) => {
        formContainer.clearValue();
        formContainer.show();

        formContainer.onSubmitOnce(() => {
            formContainer.hide();
            let answer = formContainer.getAnswer();

            const next = () => {
                questions.pop();
                showQuestion(questions);
            };

            if (!questions.isValid(answer)) {
                const [, answer] = questions.current;

                helpContainer.update(answer);
                helpContainer.show();
                questions.unShiftCurrent();

                setTimeout(() => {
                    helpContainer.hide();
                    next();
                }, timeout / speed);
                return;
            }

            next();

        });
    };

    const showQuestion = (questions) => {
        if (!questions.len) {
            progressContainer.render();
            finishContainer.show(questions);
            return;
        }

        const [question] = questions.current;

        progressContainer.render();
        questionContainer.show();
        questionContainer.update(question);

        setTimeout(() => {
            questionContainer.hide();
            showForm(questions);
        }, timeout / speed);
    };

    progressContainer.render();

    const start = () => {
        let timeout = settingsContainer.getValue("timeout");
        speed = parseInt(timeout, 10);
        settingsContainer.hide();
        showQuestion(questions);
    };

    settingsContainer.onSubmitOnce(() => {
        keyboard.remove(start);
        start();
    });

    keyboard.once("Space", start);

};