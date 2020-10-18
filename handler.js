'use strict';
const verifyPasswordLength = require('./constraints/verifyPasswordLength');

module.exports.password = async event => {
    try {
        const {password} = event.pathParameters;
        await verifyPasswordLength(password);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `todo ok ${password}`
            })
        }
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Error ${e.message}`
            })
        }
    }
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

