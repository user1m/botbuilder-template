
import builder = require('botbuilder');
import { BotWrapper } from "../../bot";

import { StartSkill } from './Start.Skill';
import { StartMessage } from './Start.Message';

export class StartDialog {

    static register = function (wrapper: BotWrapper) {
        wrapper.bot.dialog(StartSkill.Dialogs.Start, [
            (session, args, next) => {
                if (session.privateConversationData.name) {
                    session.replaceDialog(StartSkill.Dialogs.End, { entities: "food" });
                } else {
                    if (!session.privateConversationData.name) {
                        builder.Prompts.text(session, StartMessage.promptForName(session));
                    } else {
                        next();
                    }
                }
            },
            (session, result) => {
                const name = result.response;
                session.privateConversationData.name = name;
                //{ entities: "food" } - mocking response by LuisRecognizer
                session.replaceDialog(StartSkill.Dialogs.End, { entities: "food" });
            }
        ]).triggerAction({
            matches: [/start/i, /(f|F)ood/i]
        });

        wrapper.bot.dialog(StartSkill.Dialogs.End, [
            (session, args, next) => {
                session.send(StartMessage.welcomeByName(session.privateConversationData.name));
                session.userData.food = builder.EntityRecognizer.findEntity(args.entities, 'food');
                if (!session.userData.food) {
                    builder.Prompts.text(session, StartMessage.askFood());
                } else {
                    session.userData.food = session.userData.food.entity;
                    next();
                }
            },
            (session, results) => {
                if (results.response) {
                    session.userData.food = results.response;
                }
                session.endDialog(StartMessage.respondFood(session.privateConversationData.name, results.response), session.userData.food);
            }
        ]);
    };
}


