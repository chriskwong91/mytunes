// App.js - Defines a backbone model class for the whole app.
var PlaylistModel = Backbone.Model.extend({

  initialize: function(songs, name) {
    console.log('madeit');
    this.set('Songs', songs); // this is the collection
    this.set('name', name[0]);
  }

});
