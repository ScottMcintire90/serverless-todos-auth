const fetch = require('node-fetch');

module.exports.signUp = () => {
    let user = {
        username: 'justinfokes2',
        email: 'j.k.fokes2@gmail.com',
        password: 'justin2'
    }
    fetch(`https://edfopg0xna.execute-api.us-west-2.amazonaws.com/dev/signUp`,
        {
		method: 'POST',
		body: JSON.stringify(user) 
        }
    )
    .then(data => data.json().then(d => {
        console.log(d);
    }))
    .catch(e => console.log(e));

};

require('make-runnable');