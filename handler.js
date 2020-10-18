'use strict';
const {
    verifyPasswordLength, verifyPasswordStrength
} = require('./constraints');

module.exports.password = async event => {
    try {
        const {password} = event.pathParameters;
        await verifyPasswordLength(password);
        const {score} = await verifyPasswordStrength(password);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `password score: ${score}`
            })
        }
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Error ${e.message}`,
                score: e.score
            })
        }
    }
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

