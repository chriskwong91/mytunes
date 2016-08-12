// LibraryView.js - Defines a backbone view class for the music library.
var SaveNewPlaylistView = Backbone.View.extend({

  initialize: function() {
    Backbone.globalEvents.on('empty', function() {

      this.render();

    }, this);
  },
  
  events: {
    'click': function() {
      ///save playlist
      console.log('saved');
      $('body').find('.queue').text('Queue');
      Backbone.globalEvents.trigger('saved');
    }
  },


  render: function() {
    this.$el.html('<button type=select>Save Playlist</button>');
  }

});
