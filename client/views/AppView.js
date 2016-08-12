// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.allPlaylistsView = new AllPlaylistsView(this.model.get('library'));
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.savePlaylist = new SaveNewPlaylistView();
    this.createPlaylist = new CreateNewPlaylistView();

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    Backbone.globalEvents.on('saved', function(event) {
      var name = window.prompt('Enter Playlist Name: ');
      console.log(name);
      $('body').find('.queue').text(name);
      this.allPlaylistsView.collection.add(new PlaylistModel(this.songQueueView.collection, [name]));
      console.log(this.allPlaylistsView.collection);
      this.allPlaylistsView.render();
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.createPlaylist.$el,
      this.allPlaylistsView.$el,
      this.savePlaylist.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
