var gulp = require('gulp');
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('default', ['sass-main-watch', 'sass-ie8-watch', 'sass-ie9-watch']);

gulp.task('sass-main-watch', function(){
  gulp.watch('./static/assets/sass/main.scss', ['sass-main']);
});

gulp.task('sass-main', function(){
  return gulp.src('./static/assets/sass/main.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('./static/assets/css'));
});



gulp.task('sass-ie8-watch', function(){
  gulp.watch('./static/assets/sass/ie8.scss', ['sass-ie8']);
});

gulp.task('sass-ie8', function(){
  return gulp.src('./static/assets/sass/ie8.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('./static/assets/css'));
});



gulp.task('sass-ie9-watch', function(){
  gulp.watch('./static/assets/sass/ie9.scss', ['sass-ie9']);
});

gulp.task('sass-ie9', function(){
  return gulp.src('./static/assets/sass/ie9.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('./static/assets/css'));
});

//Example Site Deployment
gulp.task('deploy', function() {
  return gulp.src('./exampleSite/public/**/*')
    .pipe(ghPages({
      "remoteUrl": "git@github.com:curttimson/hugo-theme-forty.git"
    }));
});
