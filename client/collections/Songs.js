// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(dataf) {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        // this calls render twice for some reason
        this.reset(data.results);

        // this calls render thrice for some reason
        // this.set(data.results);
      }.bind(this),
      error: function(err) {
        console.log('error: ', err);
      },

    });

  },
});
