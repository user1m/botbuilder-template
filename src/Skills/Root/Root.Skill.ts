import builder = require('botbuilder');

import { Bot } from "../../bot";
import { RootDialog } from './Root.Dialog';

export class RootSkill {

    static Dialogs = {
        Root: '/'
    };

    static register = (bot: builder.UniversalBot) => {
        RootDialog.register(bot);
    }
}