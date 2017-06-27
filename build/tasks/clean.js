'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpConfig = require('./../gulp-config');

gulp.task('clean', function () {
    del(gulpConfig.allTranspiledJavascript)
    del(gulpConfig.allTranspiledSourceMaps)
    return del(gulpConfig.allTranspiledTypeDefs);
});