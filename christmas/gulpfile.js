var gulp = require('gulp');
var sass = require('gulp-ruby-sass')

gulp.task('sass', () => {
    return sass('*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('dist/css'))
})

gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('*.scss', ['sass'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto'])