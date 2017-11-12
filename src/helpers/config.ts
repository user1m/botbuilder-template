import { config as dotconfig } from 'dotenv';
dotconfig();

export = {
    luis: {
        /*
        * To obtain these:
        * 1. go to: https://www.luis.ai/
        * 2. sign in/create an account
        * 3. Create a new app
        * The provided app/key will work with the sample dialog
        * Old URL: https://api.projectoxford.ai/luis/v2.0/apps/##APP##?subscription-key=##KEY##&verbose=true
        */
        app: process.env.LUIS_APP,
        key: process.env.LUIS_KEY,
        url: process.env.LUIS_URL
    },
    microsoft: {
        app_id: process.env.MICROSOFT_APP_ID,
        password: process.env.MICROSOFT_APP_PASSWORD
    },
    port: process.env.port || process.env.PORT || 3978
};