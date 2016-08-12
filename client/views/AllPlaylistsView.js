// LibraryView.js - Defines a backbone view class for the music library.
var AllPlaylistsView = Backbone.View.extend({

  initialize: function(library) {
    this.collection.add(new PlaylistModel(library, ['Library']));
    this.render();
  },
  collection: new Playlists(),

  render: function() {
    console.log('rendering');
    this.$el.html('<select class="playlistSelector">').find('select').append(
      this.collection.map(function(playlist, index) {
        return '<option value=' + index + '>' + playlist.get('name') + '</option>';
      })
    ).append('</select>');
  }

});
