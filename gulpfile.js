var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(done) {
    gulp.src('./dev/scss/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('./dev/scss/*.scss', ['sass']);
});
