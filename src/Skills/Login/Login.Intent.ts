
import builder = require('botbuilder');
import { LoginSkill } from './Login.Skill';
import { LoginMessage } from './Login.Message';

export class LoginIntent {

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(LoginSkill.Intents.Login, [
            function (session: builder.Session) {
                session.beginDialog(LoginSkill.Dialogs.Login);
            },
            function (session: builder.Session, results: any) {
                session.send(LoginMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
}