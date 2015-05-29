var gulp = require('gulp');
var gutil = require('gulp-util');
var haml = require('gulp-haml');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var bower = require('gulp-bower2');
var concat = require('gulp-concat');

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('./build/lib/'));
});

gulp.task('sass', function () {
  gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/app'))
    .pipe(connect.reload());
});

gulp.task('coffee', function () {
  gulp.src('app/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/app/'))
    .pipe(connect.reload());
});

gulp.task('haml', function () {
  gulp.src('index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./build'));
    // .pipe(connect.reload());
});

gulp.task('clean', function () {
  gulp.src('build/*', {read: false})
    .pipe(clean());
});

gulp.task('build', ['clean', 'bower', 'haml', 'coffee', 'sass']);

gulp.task('watch', function () {
  gulp.watch('index.haml', ['haml']);
  gulp.watch('app/**/*.coffee', ['coffee']);
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('serve', ['watch', 'build'], function () {
  connect.server({
  	// default port is 8080
    root: 'build',
    // livereload: true,
    middleware: function (connect, o) {
      return [
        // Requests to /api will be processed by the Rails app
        (function () {
          var url = require('url');
          var proxy = require('proxy-middleware');
          var options = url.parse('http://localhost:3002/api');
          options.route = '/api';
          return proxy(options);
        })()
      ];
    }
  });
});

gulp.task('default', ['serve']);
