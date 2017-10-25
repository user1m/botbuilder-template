import * as unit from 'botbuilder-unit';
import * as builder from 'botbuilder';
import { BotWrapper } from "../../bot";

describe('Simple test for a bot', () => {
    let bot = null;
    let ops = {
        DEFAULT_TEST_TIMEOUT: 20000,
        LOG_LEVEL: 1
    };
    beforeEach(() => {
        bot = new BotWrapper(new builder.ConsoleConnector().listen()).bot;
        bot.set(`persistUserData`, false);
        bot.set(`persistConversationData`, false);
        bot.set(`conversationData`, false);
        // bot = new builder.UniversalBot(new builder.ConsoleConnector().listen());
        // bot.dialog('/', [
        //     session => builder.Prompts.text(session, 'What is your name?'),
        //     (session, response) => session.endDialog(`Hello ${response.response}!`)
        // ]);
    });

    it('Test login flow', (done) => {
        const messages = require('./loginScript');
        unit(bot, messages, ops).then(function () {
            done();
        }).catch((error) => {
            console.log("------------ ERROR ------------ ");
            console.log(error);
        });
    });

    it('Test start flow', (done) => {
        const messages = require('./startScript');
        unit(bot, messages, ops).then(function () {
            done();
        }).catch((error) => {
            console.log("------------ ERROR ------------ ");
            console.log(error);
        });
    });
});