var $ = require('jquery');

module.exports = {

  uiStatus: 'ui-songs-list-shown',

  toggleForm: function functionName() {
    if (this.uiStatus == "ui-form-shown") {
        $("body").removeClass().addClass("ui-songs-list-shown");
        this.uiStatus = "ui-songs-list-shown";
    } else {
        $("body").removeClass().addClass("ui-form-shown");
        this.uiStatus = "ui-form-shown";
    }
  }
}
