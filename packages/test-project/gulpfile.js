const gulp = require('gulp')
const runSequence = require('run-sequence')
const bsConfig = require('./bs-config')
const browserSync = require('browser-sync').create()
const UIengine = require('uiengine')

const uiGulp = UIengine.integrations.gulp(gulp)

uiGulp.task('site')
gulp.task('browserSync', cb => browserSync.init(bsConfig))
gulp.task('watch', cb => uiGulp.watch())
gulp.task('build', cb => runSequence(['site'], cb))
gulp.task('develop', cb => runSequence('build', ['watch', 'browserSync'], cb))