'use strict';

var baseDir = process.env.BASEDIR || '../mirror2-ati-theme';
var styleDir = baseDir + '/assets/stylesheets/'

var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	less = require('gulp-less'),
	notify = require('gulp-notify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	sourcemaps = require('gulp-sourcemaps'),
	stylesGlob = [ styleDir + '**' ],

	onError = function(err) {notify(err)};

var compileStyle = function() {
	return gulp.src( styleDir + 'main.scss' )
		.pipe( plumber({errorHandler: notify.onError({'message': 'Error: <%= error.message %>'})}) )
		.pipe( sass() )
		.pipe( autoprefixer('last 20 versions', 'ie 8') )
		.pipe( cleanCSS({compatibility: 'ie8'}) )
		.pipe( cleanCSS() )
		.pipe( sourcemaps.write() )
		.pipe( notify({message: "compiled"}) )
		.pipe( gulp.dest(baseDir + '/css/') )
};

gulp.task('default', compileStyle);
gulp.task('watch', function() {
	watch(stylesGlob, compileStyle)
	.on('error', function() {return true;})
});
