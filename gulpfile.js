var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageResize = require('gulp-image-resize'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    pngquant = require('imagemin-pngquant')

gulp.task('pics', function () {
    var imageminconf = {
            optimizationLevel: 5,
            progressive: true,
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }
    gulp.src('./img/*.{jpg,png,jpeg}')
        .pipe(imagemin(imageminconf))
        .pipe(imageResize({
            format: 'jpeg'
		}))
        .pipe(gulp.dest('dist/img/'))

    gulp.src('./views/images/*.{jpg,png,jpeg}')
        .pipe(imagemin(imageminconf))
        .pipe(imageResize({
            format: 'jpeg'
		}))         
        .pipe(gulp.dest('dist/views/images/'))

    gulp.src('./views/images/pizzeria.+(jpeg|jpg|png)')
		.pipe(imageResize({
			width: 100,
            height: 75,
            format: 'jpeg'
		}))
        .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
		.pipe(gulp.dest('dist/views/images/'));
    gulp.src('./views/images/pizzeria.+(jpeg|jpg|png)')
		.pipe(imageResize({
			width: 720,
            height: 540,
            format: 'jpeg'
		}))
        .pipe(rename(function (path) { path.basename += "-compressed"; }))
		.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css/'))
    gulp.src('./views/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/views/css/'))
})

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
    gulp.src('./views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js/'))
})

gulp.task('html', function () {
    var htmlconf = {
            removeComments: true, //清除HTML注释
            collapseWhitespace: true, //压缩HTML
            collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }
    gulp.src('./*.html')
        .pipe(htmlmin(htmlconf))
        .pipe(gulp.dest('dist/'))
    gulp.src('./views/*.html')
        .pipe(htmlmin(htmlconf))
        .pipe(gulp.dest('dist/views/'))
})

gulp.task('default', ['pics', 'css', 'js', 'html'])