var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var lambda = new AWS.Lambda();

exports.handler = async (event, context) => {
    // console.log(event);
    try {
        console.log("Lambda callee received event:", JSON.stringify(event));
        return JSON.stringify({
            statusCode: 200,
            body: "Hello Universe"
        });
    }
    catch (error) {
        console.log(error);
    }
};