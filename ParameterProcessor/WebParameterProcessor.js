/**
 * Created by sriramk on 4/26/17.
 */
'use strict';
function WebParameterProcessor() {

}

WebParameterProcessor.prototype.process = function(event) {
    console.log('WebParameterProcessor: process invoked');
    console.dir(event);

    return this.handleResultParameters(event);
}

WebParameterProcessor.prototype.handleResultParameters = function(parameters) {
    var newEvent = {};

    console.log("WebParameterProcessor: handleResultParameters - parameters");
    console.dir(parameters);

    newEvent.memberName = parameters.memberName;

    return newEvent;
}

module.exports = WebParameterProcessor;