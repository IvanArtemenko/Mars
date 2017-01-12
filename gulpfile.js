const gulp = require("gulp");
const nib = require("nib");
const stylus = require("gulp-stylus");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const bootstrap = require("bootstrap-styl");

gulp.task("stylus", function () {
    return gulp
        .src("./app/styl/main.styl")
        .pipe(plumber())
        .pipe( stylus({
            compress: true,
            use: [nib(), bootstrap()]
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./app/static/css/'));
});

gulp.task("watch", function () {
    gulp.watch('./app/**/*.styl', ['stylus']);
});

gulp.task("default", ["watch", "stylus"]);