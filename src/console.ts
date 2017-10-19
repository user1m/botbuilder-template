import { BotWrapper } from './bot';
import { ConsoleConnector } from 'botbuilder';

const bot = new BotWrapper(new ConsoleConnector());
(<ConsoleConnector>bot.connector).listen();
console.log('Bot listening, type a message to begin...');
