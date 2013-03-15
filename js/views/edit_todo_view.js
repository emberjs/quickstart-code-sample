Todos.EditTodoView = Ember.TextField.extend({
  classNames: ['edit'],
  insertNewline: function () {
    this.get('controller').acceptChanges();
  },

  focusOut: function () {
    this.get('controller').acceptChanges();
  },

  didInsertElement: function () {
    this.$().focus();
  }
});
