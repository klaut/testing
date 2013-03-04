var app = app || {};

(function(){
  'use strict';

  app.User = Backbone.Model.extend({
    //if this was real, this would have a valid RESTful url
    urlRoot: '/data/user.json',

    validate: function(attrs, options) {
      if (attrs.username == '') {
        return "username can't be empty";
      }
      if (attrs.email == '') {
        return "email can't be empty";
      }
      //very very very basic email validator
      if ( !(/(.+@(\w+\.\w+)+)/.test(attrs.email)) ) {
        return "please, enter a valid email";
      }
    }

  });

}());