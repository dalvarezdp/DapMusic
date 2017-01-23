var $ = require('jquery');

var API_URL = "/api/songs/";


module.exports = {

  // recuperar todas las canciones
  list: function (successCallback, errorCallback) {
    $.ajax({
      url: "/api/songs/",
      type: "get", // recuperar datos en una API REST
      success: function (data) {
        successCallback(data);
      },
      error: function (error) {
        errorCallback(error);
        console.error("SongsServiceError", error);
      }
    });
  },
  // recuperar una cancion

  // borrar una cancion
  delete: function (songId,successCallback, errorCallback) {
    $.ajax({
      url: "/api/songs/" + songId,
      type: "delete", // eliminar un recurso en una API REST
      success: function (data) {
        successCallback(data);
      },
      error: function (error) {
        errorCallback(error);
        console.error("SongsServiceError", error);
      }
    });
  },

  // guardar una cancion
  save: function (song, successCallback, errorCallback) {
    $.ajax({
      url: "/api/songs/",
      type: "post",
      data: song,
      success: function (data) {
        successCallback(data);
      },
      error: function (error) {
        errorCallback(error);
        console.error("SongsServiceError", error);
      }
    });
  }


}
