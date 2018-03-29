var gulp        = require('gulp');
var image       = require('gulp-image');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch("src/scss/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/scss/main.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('public/images'));
});

gulp.task('html', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream());
});

gulp.task('default', function(callback){
  runSequence('sass',
              ['images', 'html'],
              'serve',
              callback);
});