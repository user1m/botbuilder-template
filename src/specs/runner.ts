process.on('uncaughtException', function (exception: Error) {
    console.log(exception);
});
process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

import Jasmine = require('jasmine');
const jasmine = new Jasmine();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
jasmine.loadConfigFile('../../../jasmine.json');
jasmine.configureDefaultReporter({
    showColors: true
});


import * as Reporter from 'jasmine-terminal-reporter';
const reporter = new Reporter({
    isVerbose: true,
    includeStackTrace: true
});

jasmine.addReporter(reporter);
jasmine.execute();