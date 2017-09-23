const auth = require('./auth.js');

module.exports.signUp = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    auth.createUser(event).then(userId => {
        console.log('userId = ', userId)
        auth.createAndUpdateToken(userId).then(res => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({message:'The user has been given a key'})
            };
            callback(null, response)
        }).catch(e => console.log('second catch = ', e));
    }).catch(e => console.log('first catch = ', e));
}