
// import builder = require('botbuilder');

export class TalkabotService {
    public static saveName = (session: any, name: string) => {
        session.privateConversationData.name = name;
    }
}




