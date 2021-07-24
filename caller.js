var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var lambda = new AWS.Lambda();

exports.handler = async (event, context) => {
    // console.log(event);
    try {
        // let par = { event: event };
        var params = {
            FunctionName: 'arn:aws:lambda:us-east-1:xxxxxxxxxx:function:lambda-callee',
            InvocationType: 'RequestResponse', // for sync function
            LogType: 'Tail',
            Payload: '{"message":"Hello world"}'
        };
        //console.log(params);
        return await lambda.invoke(params, function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log('Lambda callee invoked: ' + data.Payload);
            }
        }).promise();

    }
    catch (error) {
        console.log(error);
    }
};