
import builder = require('botbuilder');

export class TalkabotMessage {

    public static promptForName = (session: any) => {
        return 'What is your name?';
    }

    public static welcomeByName = (name: string) => {
        return `Hello ${name}!`;
    }

    public static announceNameIsValid = (name: string) => {
        return `${name}, thats a valid name!`;
    }

    public static announceNameIsInvalid = () => {
        return `Thats NOT a valid name!`;
    }

    public static announceSessionIdenity = (session: any) => {

        let name = 'unknown (tracked)';
        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }
        return `You are logged in as ${name}`;
    }


    public static announceSessionIdenityChanged = (session: any) => {

        let name = 'unknown (tracked)';

        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }

        return `Ok... You are now logged in as ${name}`;
    }

}




