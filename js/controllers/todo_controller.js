Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function () {
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      if (this.get('isEditing')) {
        this.set('isEditing', false);

        if (Ember.isEmpty(this.get('model.title'))) {
          this.send('removeTodo');
        } else {
          this.get('model').save();
        }
      }
    },
    removeTodo: function () {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as  setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
