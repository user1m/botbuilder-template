import builder = require('botbuilder');

import { BotWrapper } from "../../bot";
import { RootDialog } from './Root.Dialog';

export class RootSkill {

    static Dialogs = {
        Root: '/'
    };

    static register = (wrapper: BotWrapper) => {
        RootDialog.register(wrapper);
    }
}