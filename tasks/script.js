var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('uglify',function () {
    gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('auto',function () {
    gulp.watch('public/js/*.js',[uglify]);
});
