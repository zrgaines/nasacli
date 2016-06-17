var request = require('request');
var prompt = require('prompt');
var open = require('open');

// 1. Welcome the user to the CLI program
console.log("Welcome to your very own NASA search tool");

// 2. Prompt the user for keywords for subreddits
prompt.start();
prompt.get(['number'], function (err, result) {
  console.log('You chose ' + result.number + '!');
  // A. Make a GET request to the search endpoint to find NASA stuff

  request("https://api.nasa.gov/planetary/apod?api_key=2ifGrri2F4HDQlsPeldjGOJuedJbkZRX4dgIt7OT", function (error, response, site) {
    if (!error && response.statusCode == 200) {
      var parsedSite = JSON.parse(site);
      console.log(parsedSite);
  // //     // var itemsArray = bodyObject.number.items;
  // //     // var artistObject = itemsArray[0];
  // //     // var artUrl = numberObject.external_urls.spotify;
  // //     // console.log(artistUrl);

  // //     var open = require('open');
  // //     open(artistUrl);

    }
  })
});


// 3. Prompt the user for an index of tracks to play

// 4. Open in browser
