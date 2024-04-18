const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function () {
  return gulp.src('*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('pug'));
