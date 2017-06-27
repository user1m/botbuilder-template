
import builder = require('botbuilder');
import { SampleSkill } from './Sample.Skill';
import { SampleMessage } from './Sample.Message';

export class SampleIntent {

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        // When I say 'Food' I want the 'SampleDialog'
        intents.matches(SampleSkill.Intents.Food, [
            function (session: builder.Session, results: any) {
                session.send(SampleMessage.promptForName(session));
            },
            function (session: builder.Session) {
                session.beginDialog(SampleSkill.Dialogs.Sample);
            }
        ]);
    };
}