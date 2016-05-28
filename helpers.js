//Helpers

//Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function () {
    //TODO: This is super insecure.
    //Move to environment variables.
    var client = new Twitter({
        consumer_key: 'Og6p6ylLSg20xAfcUImd8ONTm',
        consumer_secret: 'VbHzwkRmTRNWdwJXZxPu9Odr7Yn3dK0rRZLgLeEtdtrEezCCuM',
        access_token_key: '736631551212048384-udfEN08oOHuqPcJLbboOEYOPVb6DC21',
        access_token_secret: 'EgUfHeLAGWX03eayuDODGNRp6KINDkQGezlJeiOv7k2fO'
    });
    
    return client;
};
module.exports = Helpers;