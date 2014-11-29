var gulp = require('gulp'), 
	concat = require('gulp-concat'), 
    minifyCSS = require('gulp-minify-css');
    less = require('gulp-less');

var current_module = 'blog';

var paths = {
		styles : [
			'less/main.less'
		]
};

gulp.task('default',['less'], function() {

});

gulp.task('less', function() {

	gulp.src(paths.styles)
	 	.pipe(less())
		.pipe(minifyCSS())
	    .pipe(concat('styles.min.css'))
	    .pipe(gulp.dest('assets/dist'));

});

