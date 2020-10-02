const path = require("path");
const gulp = require("gulp");
const concat = require("gulp-concat");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const size = require("gulp-filesize");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const { name, browserList } = require("../package.json");
const DIR = {
  less: path.resolve(__dirname, "../components/**/*.less"),
  buildSrc: [
    path.resolve(__dirname, "../components/**/style.less"),
    path.resolve(__dirname, "../components/**/index.less"),
  ],
  lib: path.resolve(__dirname, "../lib"),
  es: path.resolve(__dirname, "../es"),
  dist: path.resolve(__dirname, "../dist"),
};
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, ".css");
}
function less2css() {
  return gulp
    .src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

gulp.task("copyLess", () => {
  return gulp.src(DIR.less).pipe(gulp.dest(DIR.lib)).pipe(gulp.dest(DIR.es));
});

gulp.task("copyCss", () => {
  return gulp
    .src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(
      less({
        outputStyle: "compressed",
      })
    )
    .pipe(autoprefixer({ browsers: browserList }))
    .pipe(size())
    .pipe(cssnano())
    .pipe(gulp.dest(DIR.lib))
    .pipe(gulp.dest(DIR.es));
});

gulp.task("dist", () => {
  return gulp
    .src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(
      less({
        outputStyle: "compressed",
      })
    )
    .pipe(autoprefixer({ browsers: browserList }))
    .pipe(concat(`${name}.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))

    .pipe(cssnano())
    .pipe(concat(`${name}.min.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.min.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist));
});
