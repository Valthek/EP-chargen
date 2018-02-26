var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var webpack = require('webpack-stream');

gulp.task('sass', function () {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass()).on('error', sass.logError) // Using gulp-sass
    .pipe(gulp.dest('./dist/styling'))
    .pipe(bs.reload({ stream: true }));
});

gulp.task('webpack', function(){
  return gulp.src('./src/index.tsx')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['sass', 'webpack', 'browser-sync'], function () {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/**/*.tsx', ['webpack']);  
  gulp.watch('src/**/*.ts', ['webpack']);
  gulp.watch("dist/bundle.js").on('change', bs.reload);
});

gulp.task('browser-sync', function () {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

