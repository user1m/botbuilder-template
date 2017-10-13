
import builder = require('botbuilder');

export class LoginMessage {

    public static announceNameIsValid = (name: string) => {
        return `${name}, thats a valid name!`;
    }

    public static announceNameIsInvalid = () => {
        return `Thats NOT a valid name! Try again.`;
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




