'use strict';
var Alexa = require("alexa-sdk");
// var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'WelcomeIntent': function() {
        var welcomeMessage = ExpoData.welcome;
        this.emit(':tellWithCard', "Welcome", "My Grange", "Welcome to my Grange");
    },
    'LaunchRequest': function () {
        var welcomeMessage = ExpoData.welcome;
        this.emit(':tellWithCard', welcomeMessage, "Grange agent expo", welcomeMessage);
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    },
    'DefaultWelcomeIntent': function () {
        this.emit(':tell', 'Hello World, default welcome intent');
    },
    'Unhandled': function () {
        var speechOutput = "Unhandled request"
        this.emit(':tell', speechOutput, speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Help message";
        var reprompt = speechOutput;
        this.emit(':tell', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Thanks for using My Grange. Have a great rest of the day");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Thanks for using My Grange. Have a great rest of the day");
    }
};