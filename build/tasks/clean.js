'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpConfig = require('./../gulp-config');

gulp.task('clean', function () {
    // del(gulpConfig.allTranspiledJavascript)
    // del(gulpConfig.allTranspiledSourceMaps)
    del(gulpConfig.output);
    del(gulpConfig.bundle);
    return del(gulpConfig.allTranspiledTypeDefs);
});