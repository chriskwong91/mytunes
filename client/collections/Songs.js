// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(data) {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      success: function(data) {
        console.log(this);
        this.set(data.results);
        // this.trigger('fetched', this);
      }.bind(this),
      error: function(err) {
        console.log('error: ', err);

      },
      'Content-Type': 'application/json'
    });
  },

});