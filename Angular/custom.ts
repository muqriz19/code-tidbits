class Custom {
    constructor() {

    }

    // iterate reactive form and add on props and values into object stack
    public iterateReactiveForm(object, stack = {}) {
        const keys = Object.keys(object);

        for (let k = 0; k < keys.length; k++) {
            if (!('controls' in object[keys[k]])) {
                console.log(object[keys[k]].value);
                stack[keys[k]] = object[keys[k]].value;
            } else {
                this.iterateReactiveForm(object[keys[k]].controls, stack);
            }
        }

        return stack;
    }
}