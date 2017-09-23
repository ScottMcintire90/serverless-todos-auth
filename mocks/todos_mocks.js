const fetch = require('node-fetch');

module.exports.getTodos = () => {
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/todos`)
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));
}

module.exports.getTodoById = (id) => {
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/todo/${id}`)
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));
}

module.exports.postTodo = (todo) => {
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/todo`,
        {
		method: 'POST',
		body: todo 
        }
    )
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));
}

module.exports.updateTodo = (id, todo) => {
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/update/${id}`,
        {
		method: 'PATCH',
		body: todo 
        }
    )
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));
}

module.exports.deleteTodo = (id) => {
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/delete/${id}`,
        {
		method: 'DELETE',
		body: 'nothing to see here...' 
        }
    )
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));
}

//keep at bottom of file
require('make-runnable');