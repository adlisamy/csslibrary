const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgeCss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(purgeCss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function buildBaseLib() {
  return src("lib/**/*.scss")
    .pipe(sass())
    .pipe(purgeCss({ content: ["*.html"] }))
    .pipe(dest("css/lib"));
}

function watchTask() {
  watch(["sass/**/*.scss","*.html","lib/**/*.scss"], buildStyles,buildBaseLib);
}

exports.default = series(buildBaseLib,buildStyles, watchTask);
