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
            html += '<article class="song">';
            if (cover_url == "" || cover_url == null) {
                cover_url = "/dist/img/disc-placeholder.jpg";
                html += '<picture class="cover">';
                // small screen
                html += '<source srcset="/dist/img/disc-placeholder-125px.jpg 125w, /dist/img/disc-placeholder-250px.jpg 250w " media="(max-width: 767px)">';
                // medium screen
                html += '<source srcset="/dist/img/disc-placeholder-125px.jpg 125w, /dist/img/disc-placeholder-250px.jpg 250w, /dist/img/disc-placeholder-320px.jpg 320w, /dist/img/disc-placeholder-520px.jpg 520w" media="(min-width: 768px)">';
                html += '<img class="cover" src="/dist/img/disc-placeholder.jpg">';
                html += "</picture>";
            } else {
                html += '<img class="cover" src="' + cover_url + '" alt="' + song.artist + '">';
            }
            html += '<div class="artist">' + song.artist + '</div>';
            html += '<div class="title">' + song.title + '</div>';
            html += "</article>";
        }
        $(".songs-list .ui-ideal").html(html);
    }

}
