import builder = require('botbuilder');

import { BotWrapper } from "../../bot";

import { RootSkill } from "../Root/Root.Skill";
import { LoginSkill } from "../Login/Login.Skill";
import { SampleSkill } from "../Sample/Sample.Skill";

import { RootMessage } from './Root.Message';


export class RootDialog {
    static register = (wrapper: BotWrapper) => {
        wrapper.bot.dialog(RootSkill.Dialogs.Root, [
            (session, args, next) => {
                builder.Prompts.text(session, RootMessage.respondInfo());
            },
            (session, result) => {
                if (SampleSkill.Dialogs.Start.toLowerCase().includes(result.response)) {
                    session.replaceDialog(SampleSkill.Dialogs.Start);
                } else if (LoginSkill.Dialogs.Login.toLowerCase().includes(result.response)) {
                    session.replaceDialog(LoginSkill.Dialogs.Login);
                }
            }
        ]).triggerAction({
            matches: [/^help/i, /^info/i]
        });
    }
}