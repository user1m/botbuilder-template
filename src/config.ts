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
        app: process.env.LUIS_APP || '9bb7981e-1a1f-4620-9ec4-31e0e83ee31c',
        key: process.env.LUIS_KEY || '5b2e4012f3e84a9483e8f048609e2db9',
        url: process.env.LUIS_URL || "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/##APP##?subscription-key=##KEY##&verbose=true"
    }
};