// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    // renders collection on add or remove event
    this.collection.on('add remove', this.render, this);

    this.collection.on('dequeue', function(event) {
      this.collection.playFirst();
      this.render();
    }, this);

    // renders individual songQueueEntryView
    _.each(this.collection, function(songModel, key) {
      var entryView = new SongQueueEntryView( { model: this.collection.at(key) } );
      entryView.render();
    }, this);
  },
  tagName: 'table',

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) { 

        var newSongView = new SongQueueEntryView({model: song});
        return newSongView.render();
      })
    );
  }

});
