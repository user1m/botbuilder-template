
import builder = require('botbuilder');

import { LoginDialog } from './Login.Dialog';
import { LoginService } from './Login.Service';

export class LoginSkill {

    static Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    static register = function (bot: builder.UniversalBot) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        LoginDialog.register(bot);
    };

}




