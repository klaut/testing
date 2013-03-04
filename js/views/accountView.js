var app = app || {};

$(function(){
  'use strict';

  app.AccountView = Backbone.View.extend({
    el: "#account-settings",

    edit_account_tmpl: _.template($('#edit-account-tmpl').html()),
    account_details_tmpl: _.template($('#my-account-tmpl').html()),

    events: {
      'click #edit': 'edit',
      'click #cancel': 'cancel',
      'click #save': 'save',
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'invalid', this.renderError);

      this.model.fetch();

    },

    render: function() {
      this.$el.html( this.account_details_tmpl( this.model.toJSON() ) );
      return this;
    },

    edit: function(){
      this.$el.html( this.edit_account_tmpl( this.model.toJSON() )  );
    },

    cancel: function(){
      this.render();
    },

    save: function() {
      var username = this.$('#inputUsername').val();
      var email = this.$('#inputEmail').val();
      this.model.save({username: username, email: email},{validate:true});
    },

    renderError: function(model, error){
      this.$('.alert').html( error );
      this.$('.alert').show().delay(1000).fadeOut(400);
    }  
    
  });

});