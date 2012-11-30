$(function(){

  // Todo Model

  var Movie = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "empty movie...",
        year: "0000",
        director: "empty director",
        punctuation: "0",
        order: Movies.nextOrder(),
        done: false
      };
    },

    initialize: function() {
      if (!this.get("title")) {
        this.set({"title": this.defaults.title,
                  "year": this.defaults.year,
                  "director": this.defaults.director,
                  "punctuation": this.defaults.director
                });
      }
    },

    toggle: function() {
      this.save({done: !this.get("done")});
    },

    // borra el Movie del *localStorage* y su vista
    clear: function() {
      this.destroy();
    }

  });

  // Movie Collection

  // la coleccion se guarda en  *localStorage*
  var MovieList = Backbone.Collection.extend({

    model: Movie,

    localStorage: new Store("todos-backbone"),

    done: function() {
      return this.filter(function(movie){ 
                            return movie.get('done'); 
                          });
    },

    remaining: function() {
      return this.without.apply(this, this.done());
    },

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    comparator: function(movie) {
      return movie.get('order');
    }

  });

  // Create our global collection of **Todos**.
  var Movies = new MovieList;

  // Todo Item View

  var MovieView = Backbone.View.extend({

    tagName:  "li",

    template: _.template($('#item-template').html()),

    events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },
    
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    toggleDone: function() {
      this.model.toggle();
    },

    edit: function() {
      this.$el.addClass("editing");
      this.input.focus();
    },

    close: function() {
      var value = this.input.val();
      if (!value) this.clear();
      this.model.save({title: value});
      this.$el.removeClass("editing");
    },

    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    clear: function() {
      this.model.clear();
    }

  });

// The Application

  var AppView = Backbone.View.extend({

    el: $("#todoapp"),

    statsTemplate: _.template($('#stats-template').html()),

    events: {
      "keypress #new-todo-title":  "createOnEnter",

      "keypress #new-todo-year":  "createOnEnter",
      "keypress #new-todo-director":  "createOnEnter",
      "keypress #new-todo-punctuation":  "createOnEnter",

      "click #nueva-peli": "createOnEnter",
      "click #clear-completed": "clearCompleted"
    },

    initialize: function() {

      this.input = this.$("#new-todo-title");
      this.input2 = this.$("#new-todo-year");
      this.input3 = this.$("#new-todo-director");
      this.input4 = this.$("#new-todo-punctuation");
  
      this.allCheckbox = this.$("#toggle-all")[0];

      Movies.bind('add', this.addOne, this);
      Movies.bind('reset', this.addAll, this);
      Movies.bind('all', this.render, this);

      this.footer = this.$('footer');
      this.main = $('#main');

      Movies.fetch();
    },

    render: function() {
      var done = Movies.done().length;
      var remaining = Movies.remaining().length;

      if (Movies.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }

    },

    addOne: function(movie) {
      var view = new MovieView({model: movie});
      this.$("#todo-list").append(view.render().el);
    },

    addAll: function() {
      Movies.each(this.addOne);
    },

    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Movies.create({ title: this.input.val(),
                      year: this.input2.val(),
                      director: this.input3.val(),
                      punctuation: this.input4.val()
                    });

      this.input.val('');
      this.input2.val('');
      this.input3.val('');
      this.input4.val('');
      console.log("creado");
    },

    clearCompleted: function() {
      _.each(Movies.done(), function(movie){ movie.clear(); });
      return false;
    },

  });

  var App = new AppView;

      Movies.create({ title:        "The Godafather",
                      year:         "1972",
                      director:     "Francis Ford Coppola",
                      punctuation:  "9.2"
                    });

      Movies.create({ title:        "Scarface",
                      year:         "1983",
                      director:     "Brian De Palma",
                      punctuation:  "8.3"
                    });

});