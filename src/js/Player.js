var $ = require('jquery');

module.exports = {

  play: function (audioUrl) {
    $("#player").attr("src", audioUrl);
    $("#player")[0].play();
  }

}
