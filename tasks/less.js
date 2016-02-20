var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('public/css/index.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'));
});
