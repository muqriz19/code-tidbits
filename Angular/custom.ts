class Custom {
    constructor() {

    }

    // iterate reactive form and add on props with its values
    public iterateReactiveForm(object) {
        const keys = Object.keys(object);
        let stack = {};

        for (let k = 0; k < keys.length; k++) {
            if (!('controls' in object[keys[k]])) {
                stack[keys[k]] = object[keys[k]].value;
            } else {
                stack[keys[k]] = object[keys[k]].value;
            }
        }

        return stack;
    }
}