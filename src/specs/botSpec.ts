import * as unit from 'botbuilder-unit';
import * as builder from 'botbuilder';
import { BotWrapper } from "../bot";

describe('Simple test for a bot', () => {
    let bot = null;
    beforeEach(() => {
        bot = new BotWrapper(new builder.ConsoleConnector().listen()).bot;
        // bot = new builder.UniversalBot(new builder.ConsoleConnector().listen());
        // bot.dialog('/', [
        //     session => builder.Prompts.text(session, 'What is your name?'),
        //     (session, response) => session.endDialog(`Hello ${response.response}!`)
        // ]);
    });

    it('Test login flow', (done) => {
        const messages = require('./loginScript');
        unit(bot, messages).then(function () {
            console.log("------------ PASS ------------ ");
            done();
        }).catch((error) => {
            console.log("------------ ERROR ------------ ");
            console.log(error);
        });
    });

    it('Test sample flow', (done) => {
        const messages = require('./sampleScript');
        unit(bot, messages).then(function () {
            console.log("------------ PASS ------------ ");
            done();
        }).catch((error) => {
            console.log("------------ ERROR ------------ ");
            console.log(error);
        });
    });
});