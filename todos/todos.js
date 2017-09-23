'use-strict';

const dbConfig = {
    client: 'mysql',
    connection: {
      host     : 'todos.cquf8p5arg5x.us-west-2.rds.amazonaws.com',
      user     : 'justinfokes',
      password : 'usmc030g',
      database : 'myTodos'
    }
  };

const knex = require('knex')(dbConfig);   

module.exports.knex = knex;

module.exports.getAllTodos = () => {
    return Promise.resolve(
    knex
    .select()
    .from('todos')
    .then(function (rows) {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(rows)
        };
        return response;
    })
    .catch(function (error) {
        const e = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(error)
        };
        return e;
    }));
};

module.exports.getTodoById = (event) => {
    return Promise.resolve(
    knex
    .select()
    .from('todos')
    .where('id', '=', event.pathParameters.id)
    .then(function (todo) {
        console.log('the Todo:',todo)
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(todo)
        };
        return response;
    })
    .catch(function (error) {
        const e = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(error)
        };
        return e;
    }));
}

module.exports.removeTodoById = (event) => {
    let id = event.pathParameters.id;
    return Promise.resolve(
    knex
    .select()
    .from('todos')
    .where('id', id)
    .del()
    .then(function (rows) {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(rows)
        };
        return response;
    })
    .catch(function (error) {
        const e = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(error)
        };
        return e;
    }));
}

module.exports.updateTodoById = (event) => {
    let id = event.pathParameters.id;
    let todo = event.body;
    return Promise.resolve(
    knex
    .select()
    .from('todos')
    .where('id', id)
    .update({'todo': todo})
    .then(function (rows) {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(rows)
        };
        return response;
    })
    .catch(function (error) {
        const e = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(error)
        };
        return e;
    }));
}

module.exports.putTodo = (event) => {
    let todo = event.body;
    console.log('the todo is to follow:')
    console.log(todo)
    return Promise.resolve(
    knex('todos').insert({todo:todo})
    .then(function(res) {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(res)
        };
        return response;
    })
    .catch(function (error) {
        const e = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
                body: JSON.stringify(error)
        };
        return e;
    }));
}