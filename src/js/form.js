var $ = require('jquery');
var SongsService = require('./SongsService');

$('.new-song-form').on('submit',function () {

    var self = this;

    // validacion rapida de inputs
    var inputs = $(this).find("input").each(function (i) {
      // Para cada input (find("input")) del formulario (this)
      var input = this;
      if (input.checkValidity() == false) {
        alert(input.validationMessage);
        input.focus();
        return false;
      }
    });

    // con todos los campos OK, guardamos en el backend la canción.

    // creamos el objeto cancion que quiero guardar con los datos del formulario
    var song = {
      artist: $("#artist").val(),
      title: $("#title").val(),
      audio_url: $("#audio_url").val(),
      cover_url: $("#cover_url").val()
    }

    // antes de enviar el formulario, bloqueamos el boton de enviar
    $(this).find("button").text("Saving song...").attr("disabled", true);

    // lo enviamos al backend
    SongsService.save(song,
      function (data) {
        // si se guarda bien
        alert("Canción guarda correctamente");
        self.reset();
        $(self).find("button").text("Save song").attr("disabled", false); // TODO: refactorizar esto
      },
      function (error) {
        alert("Se ha producido un error");
        console.error("Error al guardar la cancion", error);
        $(self).find("button").text("Save song").attr("disabled", false);
      });

    return false; // no queremos enviar el formulario nunca

})
