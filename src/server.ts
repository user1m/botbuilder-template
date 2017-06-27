import * as express from 'express';
import { ChatConnector } from 'botbuilder';
import { config as dotconfig } from 'dotenv';
import { Bot } from './bot';

dotconfig();
const server = express();

const bot = new Bot(new ChatConnector({ appId: process.env.MICROSOFT_APP_ID, appPassword: process.env.MICROSOFT_APP_PASSWORD }));

console.log('Configuring web server...');
server.post('/api/messages', (<ChatConnector>bot.connector).listen());

const port = process.env.port || process.env.PORT || 3978;
server.listen(port, '::', () => {
    console.log(`Server Up: Listening at port ${port}`);
});
