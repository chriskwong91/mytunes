// LibraryView.js - Defines a backbone view class for the music library.
var SinglePlaylistView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('reset', function(event) {
      this.render();
    }, this);
    //on new playlist select, set playlist to this.collection, rerender.
  },
  //

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th><th></th><th>Play Count</th>').append(
      this.collection.map(function(playlist) {
        return new PlaylistEntryView({model: playlist}).render();
      })
    );
  }

});
