
import builder = require('botbuilder');

import { LoginService } from './Login.Service';
import { LoginSkill } from './Login.Skill';
import { LoginMessage } from './Login.Message';
import { SampleMessage } from '../Sample/Sample.Message';

export class LoginDialog {

    static register = function (bot: builder.UniversalBot, intents?: builder.IntentDialog) {
        bot.dialog(LoginSkill.Dialogs.Login, [
            function (session: builder.Session) {
                // call custom prompt
                session.beginDialog(LoginSkill.Dialogs.Authenticate, {
                    prompt: SampleMessage.promptForName(session),
                    retryPrompt: LoginMessage.announceNameIsInvalid()
                });
            },
            function (session: builder.Session, results: any) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)
                    const name = results.response;
                    LoginService.saveName(session, name);
                    session.send(SampleMessage.welcomeByName(name));
                } else {
                    // session.send(LoginMessage.announceNameIsInvalid());
                }
                session.endDialog();
            }
        ]).triggerAction({
            matches: /login/i
        });

        bot.dialog(LoginSkill.Dialogs.Authenticate,
            builder.DialogAction.validatedPrompt(
                builder.PromptType.text, (name: string): boolean => {
                    //auths any name
                    return (/[a-z]/i).test(name.toLowerCase());
                }));
    };

}


