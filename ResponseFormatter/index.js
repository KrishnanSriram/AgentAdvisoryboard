/**
 * Created by sriramk on 4/24/17.
 */
var AlexaResponse = require('./AlexaResponseFormatter');

module.exports = {
    format: function(originalResponse, channel) {
        console.log('ResonseFomratter/index.js format invoked');
        // Check if this was orginally a google request and invoke appropriate response provider
        var alexaResponse = new AlexaResponse(originalResponse);
        return alexaResponse.formatResponse();
    }
}