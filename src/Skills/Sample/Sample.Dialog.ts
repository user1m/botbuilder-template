
import builder = require('botbuilder');
import { BotWrapper } from "../../bot";

import { SampleSkill } from './Sample.Skill';
import { SampleMessage } from './Sample.Message';

export class SampleDialog {

    static register = function (wrapper: BotWrapper) {
        wrapper.bot.dialog(SampleSkill.Dialogs.Start, [
            (session, args, next) => {
                if (session.privateConversationData.name) {
                    session.replaceDialog(SampleSkill.Dialogs.Sample, { entities: "food" });
                } else {
                    if (!session.privateConversationData.name) {
                        builder.Prompts.text(session, SampleMessage.promptForName(session));
                    } else {
                        next();
                    }
                }
            },
            (session, result) => {
                const name = result.response;
                session.privateConversationData.name = name;
                //{ entities: "food" } - mocking response by LuisRecognizer
                session.replaceDialog(SampleSkill.Dialogs.Sample, { entities: "food" });
            }
        ]).triggerAction({
            matches: [/start/i, /(f|F)ood/i]
        });

        wrapper.bot.dialog(SampleSkill.Dialogs.Sample, [
            (session, args, next) => {
                session.send(SampleMessage.welcomeByName(session.privateConversationData.name));
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
                session.endDialog(SampleMessage.respondFood(session.privateConversationData.name, results.response), session.userData.food);
            }
        ]);
    };
}


