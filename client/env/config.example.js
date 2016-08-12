// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'asdf');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'asdfs');
});
