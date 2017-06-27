
import builder = require('botbuilder');

import { TalkabotService } from './Talkabot.Service';
import { TalkabotSkill } from './Talkabot.Skill';
import { TalkabotMessage } from './Talkabot.Message';

export class TalkabotDialog {

    static register = function (bot: builder.UniversalBot, intents: builder.IntentDialog) {
        bot.dialog(TalkabotSkill.dialogs.Login, [
            function (session: builder.Session) {
                // call custom prompt
                session.beginDialog(TalkabotSkill.dialogs.Authenticate, {
                    prompt: TalkabotMessage.promptForName(session),
                    retryPrompt: TalkabotMessage.announceNameIsInvalid()
                });
            },
            function (session: builder.Session, results: any) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)

                    const name = results.response;

                    // TalkabotService.saveName(session, name);

                    session.privateConversationData.name = name;

                    session.send(TalkabotMessage.welcomeByName(name));


                } else {
                    // session.send(TalkabotMessage.announceNameIsInvalid());
                }
                session.endDialog();
            }
        ]);

        bot.dialog(TalkabotSkill.dialogs.Authenticate, builder.DialogAction.validatedPrompt(
            builder.PromptType.text, (name: string) => {
                return name === 'orie';
            }));

    };

}


