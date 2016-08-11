// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('dequeue', function(event) {
      this.remove(event);
    });

    this.on('enqueue', function(event) {
      this.add(event);
    }, this);

    //when song ends, remove it from queue
    this.on('ended', function(event) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    //when song is added play first song
    this.on('add', function(event) {
      if (this.length === 1) { this.playFirst(); }
    }, this);
  },
  
  playFirst: function(event) {
    this.at(0).play();
  }

});