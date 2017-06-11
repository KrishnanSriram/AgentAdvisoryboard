'use strict';

function AlexaParameterProcessor() {

}

AlexaParameterProcessor.prototype.process = function(event) {
    console.log('AlexaParameterProcessor: process invoked');
    console.dir(event.aboutentitiesslot);

    return this.handleResultParameters(event.aboutentitiesslot);
}

AlexaParameterProcessor.prototype.handleResultParameters = function(parameters) {
    var newEvent = {};

    console.log("AlexaParameterProcessor: handleResultParameters - parameters");
    console.dir(parameters);

    newEvent.memberName = parameters.value;

    return newEvent;
}

module.exports = AlexaParameterProcessor;