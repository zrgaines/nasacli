var request = require('request');
var prompt = require('prompt');
var open = require('open');
var yosay = require('yosay');


// 1. Welcome the user to the CLI program
console.log(yosay("Welcome to NASA! Enter a Date! (MM-DD)"));

// 2. Prompt the user for keywords for subreddits
prompt.start();
prompt.get(['date'], function (err, result) {
  console.log('You chose ' + result.date + '!');
  // A. Make a GET request to the search endpoint to find NASA stuff

  request('https://api.nasa.gov/planetary/apod?date=2015-' + result.date + '&api_key=2ifGrri2F4HDQlsPeldjGOJuedJbkZRX4dgIt7OT', function (error, response, site) {
    if (!error && response.statusCode == 200) {
      var parsedSite = JSON.parse(site);
      var image = parsedSite.hdurl;
      open(image);
    }
  })
});
