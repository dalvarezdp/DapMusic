var $ = require('jquery');
var SongsService = require('./SongsService');

module.exports = {

    setUiIdeal: function() {
        $('.songs-list').removeClass().addClass('songs-list ideal');
    },

    setUiBlank: function() {
        $('.songs-list').removeClass().addClass('songs-list blank');
    },

    setUiError: function() {
        $('.songs-list').removeClass().addClass('songs-list error');
    },

    setUiLoading: function() {
        $('.songs-list').removeClass().addClass('songs-list loading');
    },

    loadSongs: function() {
        var self = this;

        // mostrar el mensaje de cargando
        self.setUiLoading();

        // cargamos las canciones desde el backend
        SongsService.list(function(songs){ // si nos devuelve canciones
            if (songs.length == 0) {
                self.setUiBlank(); // si no hay canciones -> estado en blanco
            } else {
                // pintar las canciones en el listado
                self.renderSongs(songs);
                self.setUiIdeal(); // ponemos el estado ideal
            }
        }, function(error){ // si se produce algún error
            self.setUiError(); // ponemos el estado error
        });
    },

    renderSongs: function(songs) {
        var html = '';
        for (var i in songs) {
            var song = songs[i];
            var cover_url = song.cover_url;
            if (cover_url == "" || cover_url == null) {
                cover_url = "https://image.freepik.com/free-icon/cd-rom_318-9291.jpg";
            }
            html += '<article class="song">';
            html += '<img class="cover" src="' + cover_url + '" alt="' + song.artist + '">';
            html += '<div class="artist">' + song.artist + '</div>';
            html += '<div class="title">' + song.title + '</div>';
            html += "</article>";
        }
        $(".songs-list .ui-ideal").html(html);
    }

}
