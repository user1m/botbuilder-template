'use strict';

var path = require('path');
var srcRoot = './src';
var outputRoot = './release';
var testRoot = './release/tests/';
var typescriptDefinitions = './node_modules/@types/**/index.d.ts';
var tsconfig = path.resolve('tsconfig.json');

module.exports = {
    packageJSON: path.resolve('package.json'),
    root: srcRoot,
    output: outputRoot,
    bundle: path.resolve('bundle.js'),
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
        `!${outputRoot}/bundle.js`, //ignore bundle.js
        `!${testRoot}/specs/**`, //ignore specs files
        `!${outputRoot}/helpers/**`, //ignore helpers files
        outputRoot + '/**/*.js',
        testRoot + '/**/*.js',
    ],
    allJavascriptToTest: [
        outputRoot + '/Skills/**/*.js',
    ],
    javascriptUnitTests: [
        testRoot + '/unit/**/*.js'
    ],
    typescriptCompilerOptions: tsconfig
};