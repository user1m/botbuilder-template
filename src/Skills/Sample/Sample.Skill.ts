
import builder = require('botbuilder');

import { SampleIntent } from './Sample.Intent';
import { SampleDialog } from './Sample.Dialog';

export class SampleSkill {

    static Dialogs = {
        Sample: '/sample',
        Start: '/start'
    };

    static Intents = {
        Food: /^Food/i
    };

    static register = function(bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        SampleIntent.register(bot, intents);
        SampleDialog.register(bot, intents);
    };

}




