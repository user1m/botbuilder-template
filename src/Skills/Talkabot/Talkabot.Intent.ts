
import builder = require('botbuilder');
import { TalkabotSkill } from './Talkabot.Skill';
import { TalkabotMessage } from './Talkabot.Message';

export class TalkabotIntent {

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(TalkabotSkill.Intents.Login, [
            function (session: builder.Session) {
                session.beginDialog(TalkabotSkill.Dialogs.Login);
            },
            function (session: builder.Session, results: any) {
                session.send(TalkabotMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
}