# BotBuilder Template

Sample template for building bots using Microsoft Bot Framework

### ***If you like this project, give it a [![GitHub stars](https://img.shields.io/github/stars/user1m/botbuilder-template.svg?style=social&label=Star)](https://github.com/user1m/botbuilder-template).  If you find issues, [create an issue](https://github.com/user1m/botbuilder-template/issues).***


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
npm start | npm run server
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


1. Clone [botbuilder-template](https://github.com/user1m/botbuilder-template)

2. Copy `Start ` to `<NewSkill>`

3. Rename occurrences of the name `"Start"` to `<NewSkill>` in copied folder

4. Remove `Login, Start ` skill imports from `bot.ts`

5. Register `<NewSkill>` dialogs in `bot.ts`

6. Change occurrences of `Start` with `<NewSkill>` in `bot.ts`

7. Add your custom dialogs to `<NewSkill>.Dialogs.ts`

	> **NOTE:**
	
	> When you find yourself adding hard-coded bot response strings - move them to `NewSkill.Messages.ts`

	> Cards & Attachments should be put in to `NewSkill.Messages.ts`

	> Remember to break dialogs up to mini-modules - allows you to easily replace and swap out dialogs
	
	> Api calls should live in a service

	> When you want to add a BF component but don't know how... do a quick google search (i.e "Bot Framework Cards") - there are tons of sample code online

13. Configure `Root/Root.Dialog.ts` to lead into your starting dialog

12. Remove `Login, Start` from `Root/Root.Dialog.ts`

18. Delete `Login & Start` Skills folders

14. `npm run clean`
 
15. `npm run build`

16. `npm run watch` - runs a typescript watcher to compile your code in the background
 
17. `npm run server` - runs the non-webpacked emulator code so that you can edit your `.ts` files and see changes realtime

16. `npm run test` - test your bot code


## Testing

### 1. Running tests

```
npm test
```

### 2. Writing tests

#### New

```
npm run jasmine
```

Using [botbuilder-unit](https://github.com/gudwin/botbuilder-unit) you can write unit test as bot / user scripts like:

**hiScript.ts**

```js
export = [
  {
    "user" : "hi"
  },
  {
    "bot" :"How should I call you?"
  },
  {
    "user" : "Timmy"
  },
  {
    "bot" : "Nice to meet you, \"Timmy\"!"
  }
];
```

and update the `src/specs/botSpec.ts` to use your conversation scripts:

**botSpec.ts**

```js
it('Test start flow', (done) => {
        const messages = require('./hiScript');
        unit(bot, messages).then(function () {
            done();
        }).catch((error) => {
            console.log(error);
        });
    });
```


#### Old

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

* **Claudius Mbemba** - *Maintainer* - [user1m](https://github.com/user1m)
* **Lilian Kasem** - [LilianKasem](https://github.com/LilianKasem)

## License

This project is licensed under the MIT License

