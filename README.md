# BotBuilder Template

Sample template for building bots using Microsoft Bot Framework

## Concepts
* A Skill is a mapping of Intents to Dialogs
 * When I say 'Login' I want the 'LoginDialog'


## Setup
1. [Clone repo](#clone)
2. [Install packages](#installing)
3. [Build project](#building)
4. [Start server](#running)
5. [Testing](#running-tests)

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
npm start

```

### Running tests

```
npm test
```

## Deploy to Azure

[See Azure branch for an example](https://github.com/user1m/botbuilder-template/tree/azure)


Build the project which will compile your typescript `(.ts)` files and webpack the project for your into a `bundle.js`.

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

