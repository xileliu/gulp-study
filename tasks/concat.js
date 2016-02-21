var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concat',function () {
    gulp.src('public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
});
