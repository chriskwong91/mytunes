// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  makingNewPlaylist: false,

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

    Backbone.globalEvents.on('empty', function(event) {
      this.makingNewPlaylist = true;
      
    }, this);

    Backbone.globalEvents.on('saved', function(event) {
      this.makingNewPlaylist = false;

    }, this);

    //when song is added play first song
    this.on('add', function(event) {
      if (this.length === 1 && this.makingNewPlaylist) { 
        this.playFirst(); 
      }
    }, this);
  },
  
  playFirst: function(event) {
    //if (this.at(0)) {
    this.at(0).play();
    //} else {
      //this.trigger('ended', this);
    //}
  }, 

  emptyQueue: function() {
    while (this.length > 0) {
      this.pop();
    }
  }

});