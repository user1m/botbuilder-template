import builder = require('botbuilder');

import { Bot } from "../../bot";

import { RootSkill } from "../Root/Root.Skill";
import { TalkabotSkill } from "../Talkabot/Talkabot.Skill";
import { SampleSkill } from "../Sample/Sample.Skill";

import { RootMessage } from './Root.Message';


export class RootDialog {
    static register = (bot: builder.UniversalBot, intents: builder.IntentDialog) => {
        bot.dialog(RootSkill.Dialogs.Root, [
            (session, args, next) => {
                builder.Prompts.text(session, RootMessage.respondInfo());
            },
            (session, result) => {
                if (SampleSkill.Dialogs.Start.toLowerCase().includes(result.response)) {
                    session.replaceDialog(SampleSkill.Dialogs.Start);
                } else if (TalkabotSkill.Dialogs.Login.toLowerCase().includes(result.response)) {
                    session.replaceDialog(TalkabotSkill.Dialogs.Login);
                }
            }
        ]).triggerAction({
            matches: [/^help/i]
        });
    }
}