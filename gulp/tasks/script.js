module.exports = function (){
	$.gulp.task('scripts:lib', function() {
	return $.gulp.src(['sourse/js/scripts.min.js',])  
	.pipe($.gp.rigger())
  .pipe($.gp.uglify().on('error', function(e) { console.log(e.message) }))
  .pipe($.gp.concat('scripts.min.js'))
	.pipe($.gulp.dest('public/js'))
	.pipe($.browserSync.stream());
}); 
  
  $.gulp.task('scripts', function() {
	// return $.gulp.src('sourse/js/common.js')
	return $.gulp.src(
		[
		'node_modules/babel-polyfill/dist/polyfill.js',
		'sourse/js/lazy.js',
		'sourse/js/common.js',
		])
	.pipe($.babel())
	.pipe($.gulp.dest('public/js'))
	.pipe($.browserSync.stream());
});
}