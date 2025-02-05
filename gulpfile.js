const gulp = require("gulp");
const header = require("gulp-header");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const webserver = require('gulp-webserver');
const pkg = require("./package.json");

// Set the banner content
const banner = [
  "/*!\n",
  " * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n",
  " * Copyright 2016-" + new Date().getFullYear(),
  " <%= pkg.author %>\n",
  " * All rights reserved\n",
  " */\n",
  ""
].join("");

// Minify JS
gulp.task("minify-js", function() {
  return gulp
    .src("js/*.js", { ignore: 'js/*.min.js' })
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("js"));
});

// Run everything
gulp.task(
  "default",
  gulp.parallel("minify-js")
);

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task(
  "dev",
  gulp.series(
    "minify-js",
    "webserver"
  )
);

gulp.task("build", gulp.parallel("minify-js"));
