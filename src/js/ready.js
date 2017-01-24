var $ = require('jquery');
var uiManager = require('./uiManager');
var SongsListManager = require("./SongsListManager");

$(document).ready(function () {

  // manejamos el click en el boton de nueva cancion
  $("#new-song").on("click", function () {
    uiManager.toggleForm();
  });

  // cargar las canciones
  SongsListManager.loadSongs();

})
