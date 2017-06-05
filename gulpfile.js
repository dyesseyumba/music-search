var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');

// Where our files are located
var jsFiles = "src/*/**/*.js";
var viewFiles = "src/*/**/*.html";

var interceptErrors = function (error) {
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

// manage images
gulp.task('images', ['favicon'], function () {
    return gulp.src('src/images/**/*.*')
        .pipe(newer('build/images/'))
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'));
});

// manage favicon
// gulp.task('favicon', function () {
//     return gulp.src('src/favicon.ico')
//         .pipe(newer('build/'))
//         .pipe(gulp.dest('build/'));
// });

// manage fonts Files
gulp.task('fonts', function () {
    return gulp.src('src/styles/fonts/*.*')
        .pipe(newer('build/styles/fonts/'))
        .pipe(gulp.dest('build/styles/fonts/'));
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

  return merge(html, js);
});

gulp.task('default', [
  'html', 'browserify'
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
  gulp.watch(images.in, ['images']);
});
