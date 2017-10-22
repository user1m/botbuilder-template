
import builder = require('botbuilder');

export class StartMessage {

    public static promptForName = (session: any) => {
        return 'What is your name?';
    }

    public static welcomeByName = (name: string) => {
        return `Hello ${name}!`;
    }

    public static askFood = () => {
        return 'What is your favorite food?';
    }

    public static respondFood = (name: string, food: string) => {
        return `${name}'s favorite food is ${food}`;
    }
}




