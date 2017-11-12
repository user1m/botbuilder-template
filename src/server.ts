import * as express from 'express';
import { ChatConnector } from 'botbuilder';
import { BotWrapper } from './bot';
import config = require("./helpers/config");

const server = express();

const bot = new BotWrapper(new ChatConnector({ appId: config.microsoft.app_id, appPassword: config.microsoft.password }));

console.log('Configuring web server...');
server.post('/api/messages', (<ChatConnector>bot.connector).listen());

const port = config.port;
server.listen(port, () => {
    console.log(`Server Up: Listening at port ${port}`);
});
