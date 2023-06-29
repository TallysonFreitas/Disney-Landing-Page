const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function JavaScript(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'))
}

function Sass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles/'))
}

function Img(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'))
}

exports.default = gulp.parallel(Sass,Img,JavaScript)
exports.watch = function () {  
    gulp.watch('./src/styles/*.scss', gulp.parallel(Sass))
    gulp.watch('./src/scripts/main.js', gulp.parallel(JavaScript))
}