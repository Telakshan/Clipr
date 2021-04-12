const aws = require('aws-sdk');
const config = require('config');
const awsCredentials = config.get('awsCredentials');
const accessKeyId = awsCredentials.aws_access_key_id;
const awsSecret = awsCredentials.aws_secret;

export class AWSS3Uploader{
    
}