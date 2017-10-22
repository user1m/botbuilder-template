
import builder = require('botbuilder');
import { BotWrapper } from "../../bot";

import { StartDialog } from './Start.Dialog';

export class StartSkill {

    static Dialogs = {
        Start: '/start',
        End: '/end'
    };

    static register = function (wrapper: BotWrapper) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        StartDialog.register(wrapper);
    };

}




