# BotBuilder Template

Sample template for building bots using Microsoft Bot Framework

## Concepts
* A Skill is a mapping of Intents to Dialogs

 > When I say 'Login' I want the 'LoginDialog'


## Prerequisites

* [VSCode](https://code.visualstudio.com/)

## Setup
1. [Clone repo](#clone)
2. [Install packages](#installing)
3. [Build project](#building)
4. [Start server](#running)
5. [Testing](#testing)

### Clone

```
git clone git@github.com:User1m/botbuilder-template.git
```

### Installing

```
npm i
```

### Building

```
npm run build
```

### Running

```
npm start | npm run emulator
```

## Using Template

### Key Files & Folders

* `package.json` - Look in the `scripts` section for commands you can run currently. This will give you a good idea of how to use this template

* `src/console.ts` - Starting your bot with a [Console Connector](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.consoleconnector)

> Connects a UniversalBot to the command line via a console window.

* `src/server.ts` - Starting your bot with a [Chat Connector](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.chatconnector.html) (used for Bot Framework Emulator)

> Connects a UniversalBot to multiple channels via the Bot Framework.

* `src/bot.ts` - The core of your bot logic
* `src/Skills/` - The core of your bot Dialogs
* `src/test/` - Add your bot [unit tests](#testing)

### Workflow

Start by checking out `scripts` in `package.json`.
Then look at `bot.ts` for an understanding of how the bot is contructed, noting that `dialogs` are separated into mini modules and are "registered". Create new dialogs under `src/Skills` and follow the same Skills conventions.


## Testing

### Running tests

```
npm test
```

### Writing tests

Writing tests requires a good understanding on the testing concept of "mocking". Because the MS Bot Framework employs a lot of complex under-the-hood magic - which is coupled to your code, the best way to do unit testing is just to mock the Bot Framework classes and test for the invocation of methods you write.

This template used [SinonJS](http://sinonjs.org/releases/v1.17.6/) for mocking.

On a high level:

> A Sinon `spy` allows you to wiretap a function.  You can get information about the number of times a function was called, what arguments it was called with, and numerous other details.  When using a spy, the original function will behave just as normal.

> A Sinon `stub` provides the same inspection functionality of a spy, but it allows you to replace the stubbed function with one of your own (often simply returning some fake data).

**You'll need a good understanding of Sinon to write effective tests.**

As a debugging benefit (if you're using VSCode - highly suggested), there are `Mocha Tests` and `Run mocha` run configurations that allow you to step through your tests.


## Deploy to Azure

[See Azure branch for an example](https://github.com/user1m/botbuilder-template/tree/azure)


Build the project which will compile your typescript `(.ts)` files and `Webpack` the project for your into a `bundle.js`.

Commit the `bundle.js` file and connect your Azure Web App `Deployment Option` to your repo (local git, github, etc.).

This will pull the `bundle.js` and run right away (No need to `npm i`).


## Built With

* [Microsoft BotFramework](https://dev.botframework.com) - The bot framework used
* [SWELL Generator](https://github.com/swellaby/generator-swell/blob/master/docs/CHATBOT.md)
* [transmute-bot](https://github.com/transmute-industries/transmute-bot)


## Press
[Facilitating Growth Capital Funding in Africa with Bots](https://www.microsoft.com/developerblog/2017/07/19/facilitating-growth-capital-funding-africa-bots/)


## Authors

* **Claudius Mbemba** - *Initial work* - [user1m](https://github.com/user1m)
* **Lilian Kasem** - *Initial work* - [LilianKasem](https://github.com/LilianKasem)

## License

This project is licensed under the MIT License

