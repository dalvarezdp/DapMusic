var $ = require('jquery');


$('.new-song-form').on('submit',function () {

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

    return false; // no queremos enviar el formulario nunca

})
