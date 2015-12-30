var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});
// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('build', function() {
  gulp.src('./js/*.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./js/build'));
});

gulp.task('default', ['build', 'sass', 'livereload', 'watch']);