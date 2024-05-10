const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

// Tâche pour minifier les fichiers CSS
gulp.task("minify-css", function () {
  return gulp
    .src("./assets/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));
});

// Tâche pour minifier les fichiers JavaScript
gulp.task("minify-js", function () {
  return gulp
    .src(["./assets/maugallery.js", "./assets/scripts.js"])
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

// Tâche par défaut qui exécute les tâches de minification CSS et JavaScript
gulp.task("default", gulp.series("minify-css", "minify-js"));
