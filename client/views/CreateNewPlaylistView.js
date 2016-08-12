// LibraryView.js - Defines a backbone view class for the music library.
var CreateNewPlaylistView = Backbone.View.extend({

  initialize: function() {
   
    this.render();

  },

  events: {
    'click': function() {
      Backbone.globalEvents.trigger('empty', this);
    }
  },
  

  render: function() {

    this.$el.html('<button type=select>Create Playlist</button>');
    
  }

});
