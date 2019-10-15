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

import fr from "./data/fr.js";
import en from "./data/en.js";
import nl from "./data/nl.js";

const lang = document.location.pathname.slice(-13, -11);
const assignments = {fr, en, nl};


const initDarkMode = () => {
    const element = document.querySelector("#nightlink");
    
    element.addEventListener("click", evt => {
        //evt.preventDefault();
        document.body.classList.toggle("night");
        
    })
}


const init = (assignments) => {
    if (!assignments) return;
    
    initDarkMode();
    const select = document.querySelector("#assignments-assignment");

    for (let header of assignments.keys) {
        let option = document.createElement("option");
        option.innerText = header;
        option.value = header;
        select.appendChild(option);
    }


    assignmentsFormContainer.onSubmitOnce(() => {
        const selected = assignmentsFormContainer.getValue("assignment");
        const mode = assignmentsFormContainer.getValue("mode");

        const words = assignments.getWords(selected);
        assignmentsFormContainer.hide();

        quizz(words, mode);
    });

    return;
};



init(assignments[lang]);

const quizz = (words, mode) => {
    let timeout = 5000;
    let speed = 2;

    const questions = new Questions(words, mode);
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