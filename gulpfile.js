var gulp = require('gulp'); // Importa gulp
var sass = require('gulp-sass'); // Importamos sass

// definimos la tarea por defecto
gulp.task("default", function(){
  //cuando haya cambias en style.scss, compila sass
  gulp.watch('./src/scss/style.scss',['compile-sass']);
});

// compila sass
gulp.task("compile-sass", function(){
  gulp.src('./src/scss/style.scss')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('./dist/'));
});
