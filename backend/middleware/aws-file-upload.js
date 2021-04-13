const AWS = require('aws-sdk');
const config = require('config');
const awsCredentials = config.get('awsCredentials');

let S3 = new AWS.S3({
    credentials: {
        accessKeyId: awsCredentials.aws_access_key_id,
        secretAccessKey: awsCredentials.aws_secret
    },
    region: awsCredentials.region,
    params: {
        ACL: 'public-read',
        Bucket: awsCredentials.Bucket
    }
});

module.exports = S3;