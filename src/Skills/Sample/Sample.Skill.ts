
import builder = require('botbuilder');
import { BotWrapper } from "../../bot";

import { SampleDialog } from './Sample.Dialog';

export class SampleSkill {

    static Dialogs = {
        Sample: '/sample',
        Start: '/start',
        End: '/end'
    };

    static register = function (wrapper: BotWrapper) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        SampleDialog.register(wrapper);
    };

}




