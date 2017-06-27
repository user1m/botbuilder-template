
import builder = require('botbuilder');

export class SampleMessage {

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

    public static askFood = () => {
        return 'What is your favorite food?';
    }

    public static respondFood = (food: string) => {
        return `Your favorite food is ${food}`;
    }
}




