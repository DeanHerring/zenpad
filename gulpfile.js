var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync").create();

const baseDir = "src"

// reload
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: `docs/`
    },
    notify: "false",
    online: false,
    tunnel: false,
    tunnel: "",
  });
});

gulp.task("sass", function () {
  // task
  return gulp
    .src("src/sass/**/*.scss") // Путь к файлами
    .pipe(sass().on("error", sass.logError)) // Вывод ошибок
    .pipe(rename({ suffix: ".min", prefix: "" })) // rename
    .pipe(cleanCSS()) // clean css
    .pipe(autoprefixer({ browserlist: ["last 10 versions"], cascade: false })) // autoprefixer
    .pipe(gulp.dest("docs/css")) // Путь к папке с конечными файлами
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function () {
  return gulp.src("src/js/**/*.js")
      .pipe(gulp.dest("docs/js"))
      .pipe(browserSync.reload({ stream: true }));
});

gulp.task("pug", function () {
  return gulp.src("src/**/*.pug")
  	.pipe(pug({ pretty: true }))
  	.pipe(gulp.dest('docs'))
  	.pipe(browserSync.reload({ stream: true }));
});

gulp.task("img", function () {
  return gulp.src("src/img/*")
    .pipe(gulp.dest('docs/img'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/*")
    .pipe(gulp.dest('docs/fonts'))
    .pipe(browserSync.reload({ stream: true }));
});

// watch
gulp.task("watch", function () {
  // task
  gulp.watch("src/sass/**/*.scss", gulp.parallel("sass"));
  gulp.watch("src/js/**/*.js", gulp.parallel("js"));
  gulp.watch("src/**/*.pug", gulp.parallel("pug"));
  gulp.watch("src/img", gulp.parallel("img"));
  gulp.watch("src/fonts", gulp.parallel("fonts"));
});

gulp.task(
  "default",
  gulp.parallel("sass", "js", "pug", "img", "fonts", "browser-sync", "watch")
);
