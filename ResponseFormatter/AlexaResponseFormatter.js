/**
 * Created by sriramk on 4/24/17.
 */
function AlexaResponseFormatter(response) {
    console.log('Invoked AlexaResponseFormatter');
    this.originalResponse = response;
}

AlexaResponseFormatter.prototype.formatResponse = function(){
    console.log('AlexaResponseFormatter: formatResponse invoked');
    // return "Our pets hold a special place in our families hearts. So whether you are taking your pet on a short drive to the vet or on a long-distance road trip, know these 10 ways to keep your dog and cat safe while driving.";
    return this.originalResponse;
}

module.exports = AlexaResponseFormatter;