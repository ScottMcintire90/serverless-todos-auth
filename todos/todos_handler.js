'use-strict';

const todos = require('./todos.js')

module.exports.getTodos = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  todos.getAllTodos().then(todos => {
    callback(null, todos);
  })
};

module.exports.postTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  todos.putTodo(event).then(newTodoList => {
    callback(null, newTodoList);
  })
};

module.exports.getTodoById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  todos.getTodoById(event).then(todo => {
    callback(null, todo);
  })
};

module.exports.updateTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  todos.updateTodoById(event).then(todos => {
    callback(null, todos);
  })
};


module.exports.deleteTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  todos.removeTodoById(event).then(todos => {
    callback(null, todos);
  })
};