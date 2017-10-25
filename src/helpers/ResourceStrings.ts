// import { Localize } from 'localize';
import Localize = require('localize');

const RESOURCE_STRINGS = {
    "HELP": {
        "en-us": `You can say:
        <br>"login" - to start a login dialog
        <br>"start" - to start a basic dialog`
    },
    "SAMPLE": {
        "en-us": "$[1] is on the way. Your total is $$[2] and expected to arrive no later than $[3]."
    }
};

export class ResourceStrings {
    static GetString = function (stringName: string, ...args: any[]): string {
        const resources = new Localize(RESOURCE_STRINGS);
        resources.setLocale("en-us");
        return resources.translate(stringName, ...args);
    };
}