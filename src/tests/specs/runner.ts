process.on('uncaughtException', function (exception: Error) {
    console.log(exception);
});
process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

import * as Jasmine from 'jasmine';
const jasmine = new Jasmine();
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
jasmine.loadConfigFile('jasmine.json');
jasmine.configureDefaultReporter({
    showColors: true
});

import * as JasmineConsoleReporter from 'jasmine-console-reporter';
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

// initialize and execute
jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();