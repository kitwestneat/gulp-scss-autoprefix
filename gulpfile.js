'use strict';


var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	less = require('gulp-less'),
	notify = require('gulp-notify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	sourcemaps = require('gulp-sourcemaps'),
	stylesGlob = ['./../mirror2-ati-theme/assets/stylesheets/**'],

	onError = function(err) {notify(err)};


gulp.task('watch', function() {

	watch(stylesGlob, function (event) {

		return gulp.src( './../mirror2-ati-theme/assets/stylesheets/main.scss' )
			.pipe( plumber({errorHandler: notify.onError({'message': 'Error: <%= error.message %>'})}) )
			.pipe( sass() )
			.pipe( autoprefixer('last 20 versions', 'ie 8') )
			.pipe( cleanCSS({compatibility: 'ie8'}) )
	        .pipe( cleanCSS() )
			.pipe( sourcemaps.write() )
			.pipe( notify({message: "compiled"}) )
			.pipe( gulp.dest("./../mirror2-ati-theme/css/") )
	})
 
	.on('error', function() {return true;})

});