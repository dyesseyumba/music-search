var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');

// Where our files are located
var jsFiles = "src/*/**/*.js";
var viewFiles = "src/*/**/*.html";

var interceptErrors = function () {
  var args = Array
    .prototype
    .slice
    .call(arguments);

  // Send error to notification center with gulp-notify
  notify
    .onError({title: 'Compile Error', message: '<%= error.message %>'})
    .apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

// build a bundle to serve it
gulp.task('browserify', ['views'], function () {
  return browserify('./src/app.js').transform(babelify, {
    presets: [
      [
        'env', {
          targets: {
            browsers: ['last 2 versions', 'ie >= 11']
          },
            loose: true
          }
        ]
    ]
  })
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('main.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./build/'));
});

// builds html files
gulp.task('html', function () {
  return gulp
    .src("src/index.html")
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/'));
});

gulp.task('views', function () {
  return gulp
    .src(viewFiles)
    .pipe(templateCache({standalone: true}))
    .on('error', interceptErrors)
    .pipe(rename("app.templates.js"))
    .pipe(gulp.dest('./src/*/config/'));
});

// builds images images
gulp.task('images', function () {
  return gulp
    .src('src/images/**/*.*')
    .pipe(newer('build/images/'))
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/'));
});

// builds fonts Files
gulp.task('fonts', function () {
  return gulp
    .src('src/styles/fonts/*.*')
    .pipe(newer('build/styles/fonts/'))
    .pipe(gulp.dest('build/styles/fonts/'));
});

// builds sass
gulp.task('sass', function () {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/styles'));
});

// This task is used for building production ready minified JS/CSS files into
// the dist/ folder
gulp.task('build', [
  'html', 'browserify'
], function () {
  var html = gulp
    .src("build/index.html")
    .pipe(gulp.dest('./dist/'));

  var js = gulp
    .src("build/main.js")
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));

  var images = gulp
    .src('build/images/**/*.*')
    .pipe(newer('dist/images/'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));

  var fonts = gulp
    .src('build/styles/fonts/*.*')
    .pipe(newer('dist/styles/fonts/'))
    .pipe(gulp.dest('dist/styles/fonts/'));

  var css = gulp.src('build/app.css')
        .pipe(newer('dist/styles/app.css'))
        .pipe(gulp.dest('dist/styles/app.css'));

  return merge(html, js, images, fonts, css);
});

gulp.task('default', [
  'html', 'browserify', 'images', 'fonts', 'sass'
], function () {

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 3001,
    notify: false,
    ui: {
      port: 3002
    }
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['browserify']);
  gulp.watch('src/images/**/*.*', ['images']);
  gulp.watch('src/styles/fonts/*.*', ['fonts']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
