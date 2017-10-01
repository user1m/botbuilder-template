"use strict";

module.exports = {
    env: {
        browser: false,
        commonjs: true,
        node: true,
        mocha: true,
        "shared-node-browser": false,
        es6: true,
        worker: false,
        amd: false,
        jasmine: true,
        jest: false,
        phantomjs: true,
        protractor: true,
        qunit: true,
        jquery: false,
        prototypejs: false,
        shelljs: true,
        meteor: false,
        mongo: true,
        applescript: false,
        nashorn: false,
        serviceworker: false,
        atomtest: false,
        embertest: false,
        webextensions: false,
        greasemonkey: false
    },
    extends: 'eslint:recommended',
    rules: {
        indent: [
            'error',
            4,
            {
                "SwitchCase": 1
            }
        ],
        'linebreak-style': [
            'off'
        ],
        semi: [
            'error',
            'always'
        ],
        console: [
            1, 2
        ]

    },
    // Custom Globals
    globals: {

    }
};