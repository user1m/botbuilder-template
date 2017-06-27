
import builder = require('botbuilder');

import { SampleSkill } from './Sample.Skill';
import { SampleMessage } from './Sample.Message';

export class SampleDialog {

    static register = function(bot: builder.UniversalBot, intents: builder.IntentDialog) {
        bot.dialog(SampleSkill.Dialogs.Sample, [
            (session, args, next) => {
                session.userData.food = builder.EntityRecognizer.findEntity(args.entities, 'food');
                if (!session.userData.food) {
                    builder.Prompts.text(session, SampleMessage.askFood());
                } else {
                    session.userData.food = session.userData.food.entity;
                    next();
                }
            },
            (session, results) => {
                if (results.response) {
                    session.userData.food = results.response;
                }
                session.endDialog(SampleMessage.respondFood(results.response), session.userData.food);
            }
        ]);

        bot.dialog(SampleSkill.Dialogs.Start, [
            (session) => {
                session.endDialog("Hello " + session.message.user.name + "!");
            }
        ]);
    };
}


