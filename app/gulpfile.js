var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
    nodemon({
        script: './bin/www',
        ext: 'html js ejs css',
        env: {
            DEBUG: 'preview'
        },
        ignore: ['node_modules', 'gulpfile.js']
    }).on('start', function() {
        //
    });
});
gulp.task('default', ['serve']);
