/**
 * Created by sriramk on 4/18/17.
 */
'use strict';

var grangeRepository = require('./grangeRepository');

function ParameterParser(event) {
    this.event = event;
    this.redundantTerms = [];
    console.log('ParameterParser: Event initialized');
}

ParameterParser.prototype.parse = function() {
    var memberName = this.filterRedundantTerms(this.redundantTerms, this.event.memberName.toLowerCase());
    // remove extra space if any in the right
    memberName = memberName.replace(/\s+$/g, '');
    // remove extra space if any in left
    memberName = memberName.replace(/^\s+/g, '');
    console.log('parse: memberName after filter - ****' + memberName + '****');
    if(memberName == null || memberName == '') {
        console.log('memberName has been CLEANED by. Defaulted to null');
        memberName = '';
    }

    var handlerFunction = grangeRepository.getMemberInfo;
    return handlerFunction;
}

ParameterParser.prototype.filterRedundantTerms = function(redundantTerms, parameter) {
    console.log('filterRedundantTerms: Parameter before filter - ' + parameter);
    if(parameter == null || parameter == undefined) {
        return '';
    }

    parameter = parameter.toLowerCase();

    for(var filter in redundantTerms) {
        console.log('Processing filter: ' + filter);
        var updatedParameter = parameter.replace(redundantTerms[filter], '');
        if(parameter != updatedParameter) {
            return updatedParameter;
        }
    }

    return parameter;
}


module.exports = ParameterParser;