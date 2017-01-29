var $ = require('jquery');
var uiManager = require('./uiManager');
var SongsListManager = require("./SongsListManager");
var SongsService = require("./SongsService");
var Player = require("./Player");

$(document).ready(function () {

  // manejamos el click en el boton de nueva cancion
  $("#new-song").on("click", function () {
    uiManager.toggleForm();
  });

  // manejador de eventos del boton borrar canciones
  $(".songs-list").on("click",".delete-button", function () {
    var songId = $(this).data("id");
    SongsListManager.deleteSong(songId);
  });

  // manejador de eventos del boton de reproducir
  $(".songs-list").on("click",".play-button", function () {
    var audioUrl = $(this).data("audioUrl");
    Player.play(audioUrl);
  });

  // cargar las canciones
  SongsListManager.loadSongs();

  // si llamas a gulp con gulp --modo superhero podemos ver el valor de la variable
  console.log("VARIABLES DE ENTORNO", process.env.modo);

})
