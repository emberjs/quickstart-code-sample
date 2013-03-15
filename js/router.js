Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes    
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return Todos.Todo.find();
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return Todos.Todo.find();
  }
});
