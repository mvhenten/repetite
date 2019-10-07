import ElementContainer from "./container.js";

class FormContainer extends ElementContainer {
    onSubmitOnce(fn) {
        const listener = (evt) => {
            evt.preventDefault();
            this.element.removeEventListener("submit", listener);
            fn();
        };

        this.element.addEventListener("submit", listener);
    }

    get input() {
        return this.element.querySelector("input");
    }

    clearValue() {
        this.input.value = null;
    }

    getValue(name) {
        for (let e of this.element.elements) {
            if (e.name == name)
                return e.value;
        }
    }

    show() {
        super.show();
        setTimeout(() => {
            this.input.focus();
        }, 100);
    }

    getAnswer() {
        return this.input.value;
    }
}

export default FormContainer;