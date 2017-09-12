var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass-main-watch']);

gulp.task('sass-main-watch', function(){
  gulp.watch('./static/assets/sass/main.scss', ['sass-main']);
});

gulp.task('sass-main', function(){
  return gulp.src('./static/assets/sass/main.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('./static/assets/css'));
});
