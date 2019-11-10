var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("scss"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("scss/*.scss", style);
  gulp.watch("path/to/html/*.html", browserSync);
}

exports.watch = watch;
exports.style = style;
