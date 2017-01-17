var gulp = require('gulp'); // Importa gulp
var sass = require('gulp-sass'); // Importamos sass
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

// definimos la tarea por defecto
gulp.task("default", function(){

  //arrancar el servidor de browser-sync
  browserSync.init({
    server: "./"
  });

  //cuando haya cambios en style.scss, compila sass
  gulp.watch('./src/scss/*.scss',['compile-sass']);

  //cuando se produzca un cambio en el html, recargamos el nagegador
  gulp.watch('./*.html', function(){
        browserSync.reload();  // recarga navegador
        notify().write("Navegador recargado"); // mostramos notificación
    });
  //gulp.watch('./*.html', browserSync.reload);

});

// compila sass
gulp.task("compile-sass", function(){
  gulp.src('./src/scss/style.scss')
      .pipe(sass().on('error',function(error) {
          return notify().write(error); //Si ocurre algun error, mostramos notificacion
      }))
      .pipe(gulp.dest('./dist/')) //dejamos el css en la carpeta ./dist
      .pipe(browserSync.stream()) //recargamos el css en el navegador
      .pipe(notify("SASS Compilado :)"));
});
