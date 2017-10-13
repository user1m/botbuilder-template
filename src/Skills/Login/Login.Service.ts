
// import builder = require('botbuilder');

export class LoginService {
    public static saveName = (session: any, name: string) => {
        session.privateConversationData.name = name;
    }
}




