const k = require('../db/db');
let knex = k.knex; 
const bcrypt = require('bcrypt-nodejs');
const nJwt = require('njwt');
const rand = require('secure-random');


module.exports.testBcrypt = console.log(bcrypt);

module.exports.createUser = (event) => {
    let user = JSON.parse(event.body);
    let pw  = user.password;
    return new Promise ((resolve) => {
    bcrypt.genSalt(saltRounds = 10, (err, salt) => {
        bcrypt.hash(pw, salt, null, (err, hash) => {
            user.password = hash;
            knex('users')
            .insert(user)
            .then(user => {
                resolve(user[0]);
                })
            })
        })
    })
    .catch(e => console.log(e))
};

module.exports.createAndUpdateToken = (user) => {
    let signingKey = rand(256, {type: "Buffer"});
    let claims = {sub: `user/${user}`, scope: 'user'};
    let jwt = nJwt.create(claims, signingKey);
    jwt.setExpiration(new Date().getTime() + (24*60*60*1000));
    let token = jwt.compact();
    let userArray = Object.assign({}, {id:user, tokenKey:null, token:token});
    let key1 = signingKey.toString('base64');
    let key2 = Buffer.from(key1, 'base64');
    let tk = signingKey.toString('base64');
    let uk = userArray.token;
    return new Promise ((resolve, reject) => {
        knex('users')
        .where('id', '=', userArray.id)
        .update({tokenKey: tk, token: uk})
        .then(userId => {
            resolve(userId);
            knex.destroy();
        })
        .catch(e => {
            reject(e);
            knex.destroy();
        })
    });
};


module.exports.authenticate = () => {

};

module.exports.response = () => {
}

require('make-runnable');