
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

let seed = [
    {todo: 'go home...'},
    {todo: 'go to sleep...'},
    {todo: 'go to the movies...'},
    {todo: 'go to the moon'},
    {todo: 'say you are sorry'},
    {todo: 'take back apologe'}
]
module.exports.seedDB = () => {
    seed.map(t => {
        knex('todos').insert({todo: t.todo})
        .then( rows => {
            console.log(rows);
        })
        .catch(e => console.log(e));
    })
    knex.destroy();
    console.log('fully seeded');
};

require('make-runnable');