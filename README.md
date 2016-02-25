# gulp-study
项目的目录结构
gulp-study

##gulp api

gulpfile.js

```js
var gulp = require('gulp'),
    wrench = require('wrench'); 
    //npm install wrench ---

/**
 *  可以把所有关于gulp task的任务统一位置
 *  wrench 通过wrench，预加载各个单独的task js的任务，不需要require 的方式去引用
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./tasks').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./tasks/' + file);
});

gulp.task('auto',function () {
    gulp.watch('public/js/*.js',['concat']);
});
gulp.task('build',['less','concat','auto']);

```



