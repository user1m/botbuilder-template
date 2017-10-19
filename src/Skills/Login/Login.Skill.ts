
import builder = require('botbuilder');
import { BotWrapper } from "../../bot";

import { LoginDialog } from './Login.Dialog';
import { LoginService } from './Login.Service';

export class LoginSkill {

    static Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    static register = function (wrapper: BotWrapper) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        LoginDialog.register(wrapper);
    };

}




