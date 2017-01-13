const browserify = require('browserify')
const gulp = require('gulp')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './index.js',
    debug: true
  }).transform('babelify', {presets: ['es2015']})

  return b.bundle()
    .pipe(source('leo.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('snippet', function () {
  return gulp.src('./snippet.js')
    .pipe(uglify({
      output: {
        max_line_len: 80
      }
    }))
    .pipe(gulp.dest('./dist/js'))
})


