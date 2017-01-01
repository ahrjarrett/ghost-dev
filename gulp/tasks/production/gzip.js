var gulp = require('gulp');
var gzip = require('gulp-zip');

gulp.task('gzip', function () {
  return gulp
    .src('dist/assets/**/*.{css,js}')
    .pipe(gzip())
    .pipe(gulp.dest('dist/assets'));
});
