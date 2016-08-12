// SongQueue.js - Defines a backbone model class for the song queue.
var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,

  initialize: function() {

    //when song ends, remove it from queue
    this.on('ended', function(event) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    //when song is added play first song
    // Backbone.globalEvents.on('saved', function(event) {
    //   this.add(new PlaylistModel());
    // }, this);
  },
  
  playFirst: function(event) {
    //if (this.at(0)) {
    this.at(0).play();
    //} else {
      //this.trigger('ended', this);
    //}
  }



});