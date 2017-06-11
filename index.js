'use strict';

var Parser = require('./ParameterParser');
var grangeRepository = require('./grangeRepository');
var parameterProcessor = require('./ParameterProcessor');
var responseFormatter = require('./ResponseFormatter');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('GrangeAgentAdvisoryBoardMember index: Event parameter information');
    console.dir(event);
    
    var newEvent = parameterProcessor.processor(event);
    console.log('New Event');
    console.dir(newEvent);

    var parameterParser = new Parser(newEvent);
    var functionHandler = parameterParser.parse();
    console.dir(functionHandler);
    functionHandler.call(grangeRepository, newEvent.memberName, function(err, data) {
        if(err) {
            console.log('Error: Failed to service request');
            callback(err);
        } else {
            console.log('Success: Serviced Requests');
            var finalResponse = responseFormatter.format(data, newEvent.channel);
            console.log('Final response from Lambda handler');
            console.dir(finalResponse);
            callback(null, finalResponse);
        }
    });
};
