
import builder = require('botbuilder');

import { LoginIntent } from './Login.Intent';
import { LoginDialog } from './Login.Dialog';
import { LoginService } from './Login.Service';

export class LoginSkill {

    static Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };

    static Intents = {
        Login: /^Login/i,
    };

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        LoginIntent.register(bot, intents);
        LoginDialog.register(bot);
    };

}




