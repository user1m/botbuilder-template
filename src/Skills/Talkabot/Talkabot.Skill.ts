
import builder = require('botbuilder');

import { TalkabotIntent } from './Talkabot.Intent';
import { TalkabotDialog } from './Talkabot.Dialog';
import { TalkabotService } from './Talkabot.Service';

export class TalkabotSkill {

    static dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };

    static intents = {
        Login: /^Login/i,
    };

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        TalkabotIntent.register(bot, intents);
        TalkabotDialog.register(bot, intents);
    };

}




