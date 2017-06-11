'use strict';
var AlexaParamProcessor = require('./AlexaParameterProcessor');
var WebParamProcessor = require('./WebParameterProcessor');

module.exports = {
    processor: function(event) {
        if(event.memberName != null) {
            var paramProcessor = new WebParamProcessor();
            return paramProcessor.process(event);
        }
        if(event.aboutentitiesslot != null) {
            console.log('processor: Looks like we need AlexaParamProcessor');
            var paramProcessor = new AlexaParamProcessor();
            return paramProcessor.process(event);
        }
    }
}