
import builder = require('botbuilder');

import { TalkabotService } from './Talkabot.Service';
import { TalkabotSkill } from './Talkabot.Skill';
import { TalkabotMessage } from './Talkabot.Message';
import { SampleMessage } from '../Sample/Sample.Message';

export class TalkabotDialog {

    static register = function (bot: builder.UniversalBot, intents?: builder.IntentDialog) {
        bot.dialog(TalkabotSkill.Dialogs.Login, [
            function (session: builder.Session) {
                // call custom prompt
                session.beginDialog(TalkabotSkill.Dialogs.Authenticate, {
                    prompt: SampleMessage.promptForName(session),
                    retryPrompt: TalkabotMessage.announceNameIsInvalid()
                });
            },
            function (session: builder.Session, results: any) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)
                    const name = results.response;
                    TalkabotService.saveName(session, name);
                    session.send(SampleMessage.welcomeByName(name));
                } else {
                    // session.send(TalkabotMessage.announceNameIsInvalid());
                }
                session.endDialog();
            }
        ]).triggerAction({
            matches: /login/i
        });

        bot.dialog(TalkabotSkill.Dialogs.Authenticate,
            builder.DialogAction.validatedPrompt(
                builder.PromptType.text, (name: string): boolean => {
                    //auths any name
                    return (/[a-z]/i).test(name.toLowerCase());
                }));
    };

}


