class TextFormat {
    /**
      * Modify the text
      *
      * @param task The action that will modify the text
      * @param stringVal The actual string value
      * @param replaceMent The array string that holds the target string, and relacement word to replace
      *
      * [0] = target word
      * [1] = replacement word
      */
    public modifyText(task: string, stringVal: string, replaceMent?: string[]): string {
        const value = stringVal;

        switch (task) {
            case 'uppercase':

                return value[0].toUpperCase() + value.substring(1, value.length);

            case 'nowhitespace':
                return value.replace(' ', '');

            case 'removeunderline':
                return value.replace('_', '');

            case 'replace':
                if (!(replaceMent[0]) || !(replaceMent[1])) {
                    throw new Error('Replacement values not given');
                }
                const target = replaceMent[0];
                const replaceMentVal = replaceMent[1];

                if (value === target) {
                    return replaceMentVal;
                } else {
                    return value;
                }

            default:
                return value;
        }
    }
}

