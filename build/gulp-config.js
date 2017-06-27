'use strict';

var path = require('path');
var srcRoot = './src';
var outputRoot = './release';
var testRoot = './release/test';
var typescriptDefinitions = './node_modules/@types/*/index.d.ts';
var tsconfig = './tsconfig.json';

module.exports = {
    packageJSON: path.resolve('package.json'),
    root: srcRoot,
    output: outputRoot,
    allJavascript: [
        outputRoot + '/**/*.js',
        '!node_modules/**'
    ],
    allTypescript: [
        srcRoot + '/**/*.ts'
    ],
    allTranspiledTypeDefs: [
        outputRoot + '/**/*.d.ts'
    ],
    allTranspiledSourceMaps: [
        outputRoot + '/**/*.js.map'
    ],
    allTranspiledJavascript: [
        outputRoot + '/**/*.js',
        testRoot + '/**/*.js',
        `!${outputRoot}/bundle.js`
    ],
    javascriptUnitTests: [
        testRoot + '/unit/**/*.js'
    ],
    typescriptCompilerOptions: tsconfig
};
