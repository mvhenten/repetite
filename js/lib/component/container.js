class ElementContainer {
    constructor(selector) {
        this._selector = selector;
    }
    get element() {
        return document.querySelector(this._selector);
    }

    setStyle(style) {
        for (let key in style) {
            this.element.style[key] = style[key];
        }
    }

    show() {
        this.setStyle({
            display: "block",
            opacity: 1
        });
    }

    hide() {
        this.setStyle({
            display: "none",
            opacity: 0
        });
    }

    update(innerText) {
        this.element.innerText = innerText;
    }
}

export default ElementContainer;