/**
 * Created by sriramk on 4/18/17.
 */
var config = {
    accessKeyId: 'AKIAIMPQQEK5UIE6SR5A',
    secretAccessKey: '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',
    region: 'us-east-1'
};

var voiceBucketConfig = {
    'Bucket': 'grangevoiceproducts',
    'Key':'advisoryBoardMembers.json'
};

var AWS = require('aws-sdk');
var awsConfig = require('aws-config');
var s3 = new AWS.S3(awsConfig(config));
var utility = require('./utility');

module.exports = {
    allMembers:{},
    getAllAdvisoryboardMembers : function(callback) {
        if(Object.keys(this.allMembers).length <= 0) {
            s3.getObject(voiceBucketConfig, function(err, data) {
                if(err) {
                    console.log(err, err.stack);
                } else {
                    this.allMembers = JSON.parse(data.Body.toString('utf-8'));
                    var stringData = this.allMembers.advisoryBoardMembers;
                    callback(null, stringData);
                }
            });
        } else {
            callback(null, this.allTips);
        }
    },
    getMemberInfo: function(memberName, callback) {
        this.getAllAdvisoryboardMembers(function (err, data) {
            if(err) {
                console.log(err, err.stack);
                callback(err);
            } else {
                for(var member in data) {
                    console.log('Compare parameter *' + memberName.toLowerCase() + '* with data *' + data[member].name.toLowerCase() + '*');
                    if(data[member].name.toLowerCase() === memberName.toLowerCase()) {
                        callback(null, data[member]);
                    } else {
                        continue;
                    }
                }

            }
            callback("ERROR: Cannot find data");
        });

    }
};