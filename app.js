var prompt = require('prompt');
var open = require('open');


// 1. Welcome the user to the CLI program
console.log("Welcome to NASA!");

// 2. Prompt the user for an artist name
prompt.start();
prompt.get(['firstChoice'], function (err, result) {
  request("https://api.nasa.gov/planetary/apod?api_key=2ifGrri2F4HDQlsPeldjGOJuedJbkZRX4dgIt7OT", function (error, response, site) {
    if (!error && response.statusCode == 200) {
      var parsedSite = JSON.parse(site);
      console.log(parsedSite);
})
//   console.log('Here are some songs by ' + result.artistName + ":")
//   var counter = 1;
//   var jukebox = new Jukebox(result.artistName, function(response){
//     response.songs.forEach(function(song){
//       console.log(counter + ". " + song.name + " - " + song.album);
//       counter++;
//     })
//
//     console.log("Which song would you like to play?");
//     prompt.get(['index'], function (innerErr, innerResult){
//       var song = response.songs[innerResult.index - 1];
//       console.log("Opening " + song.name + "...");
//       open(song.url);
//       console.log("Goodbye!")
//     })
//   });
//   // A. Make a GET request to the search endpoint to find to Spotify ID
//   // B. Make a GET request to the artist endpoint with the Spotify ID to find the artist's songs
// });
//
// // 3. Return a list of artist's songs
// //
// // 4. Prompt the user for an index of song to play
// //
// // 5. Open in browser
