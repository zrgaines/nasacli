var request = require('request');
var prompt = require('prompt');
var open = require('open');
var yosay = require('yosay');


// 1. Welcome the user to the CLI program
console.log(yosay("Welcome to NASA!\n1. ISS \n2. Picture of the Day\n3. Asteroid Info \n Choose a number to proceed."));


prompt.start();
prompt.get(['choice'], function (err, result) {
  console.log('You chose ' + result.choice + '!');
  if(result.choice === '1') {
    open('http://www.ustream.tv/channel/live-iss-stream')
  }
  if(result.choice == '2') {
  console.log(yosay("Picture of the Day! Type a date (YYYY-MM-DD) for a picture!"))
  prompt.start();
  prompt.get(['date'], function(err, number) {
    request('https://api.nasa.gov/planetary/apod?date=' + number.date + '&api_key=2ifGrri2F4HDQlsPeldjGOJuedJbkZRX4dgIt7OT', function (error, response, site) {
      if (!error && response.statusCode == 200) {
        var parsedSite = JSON.parse(site);
        var image = parsedSite.hdurl;
        open(image);
        }
      })
    })
  }
  if(result.choice == '3') {
    request('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=2ifGrri2F4HDQlsPeldjGOJuedJbkZRX4dgIt7OT', function (error, response, site) {
    if (!error && response.statusCode == 200) {
       var parsedSite = JSON.parse(site);
       var url = parsedSite.nasa_jpl_url;
       open(url);
      }
    })
  }
});
