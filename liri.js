// ------------------------------------------------------- // 
// -- Bienvenidos! --------------------------------------- //
// ------------------------------------------------------- // 

// .env file for environment variables
require("dotenv").config();

// axios for API calls
const axios = require('axios');

// moment.js for dates
var moment = require('moment');

// loads Spotify API keys
var keys = require("./keys.js");

// spotify npm package for API
var Spotify = require('node-spotify-api');

// loading spotify keys into a var
var spotify = new Spotify(keys.spotify);

// DEBUG log out the spotify api key
// console.log(spotify); 

// take first (3rd) arg from terminal as search type
let command = process.argv[2];

// take any input after 3rd arg as search params
let params = process.argv.slice(3).join(' ');

// define the concert API call
const concertSearch = function () {
    axios.get("https://rest.bandsintown.com/artists/" + params + "/events?app_id=codingbootcamp")
        .then(function (response) {

            // DEBUG full API response 
            // console.log(response);

            console.log();
            console.log('===== Concert Results ============================================');
            console.log();

            // search response for artist - events
            console.log(`Upcoming Events for * ${params} *`);
            console.log();

            // log out each venue, venue location, and date
            for (i = 0; i < response.data.length; i++) {
                let date = moment(response.data[i].datetime).format('MM/DD/YYYY');
                console.log(`${response.data[i].venue.name} || ${response.data[i].venue.city}, ${response.data[i].venue.country} || ${date}`)
                console.log();
            };


            console.log('=================================================================');

        })

        .catch(function (error) {
            console.log('Oh no!  What the heck?  Try again in a few.');
        });
}

const spotifySearch = function () {
    if (params === '') {
        console.log("Oh heck!  No search params were passed.  Ace of Base it is...");
        params = 'The Sign';
    }

    spotify.search({ type: 'track', query: params }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // DEBUG full API response 
        // console.log(data);

        console.log('=================================================================');
        console.log();

        for (i = 0; i < data.tracks.items.length; i++) {

            // if preview unavailable, fill replace null
            if (data.tracks.items[i].preview_url === null) {
                preview = 'Not Available'
            } else {
                preview = data.tracks.items[i].preview_url
            };

            // log out song, artist, album, and audio preview href
            console.log();
            console.log(`${data.tracks.items[i].name} || ${data.tracks.items[i].artists[0].name} || ${data.tracks.items[i].album.name}`);
            console.log(`Preview: ${preview}`);
            console.log(`Spotfy ID: ${data.tracks.items[i].id}`);
        }

        console.log('=================================================================');
    });
}

const movieSearch = function () {
    if (params === '');
    params = 'Mr. Nobody';
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t=' + params)
        .then(function (response) {

            // DEBUG full API response 
            // console.log(response);

            console.log();
            console.log('----- Movie Result ----------------------------------------------');
            console.log(`Title: ${response.data.Title}`);
            console.log(`IMDB Rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.imdbRating}`);
            console.log(`Country: ${response.data.Country}`);
            console.log(`Actors: ${response.data.Actors}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log('-----------------------------------------------------------------');
            console.log();

        })
        .catch(function (error) {
            // handle error
            console.log(`Error: ${error}`);

        })
}

switch (command) {
    case 'concert-this':
        concertSearch();
        break;

    case `spotify-this-song`:
        spotifySearch();
        break;

    case 'movie-this':
        movieSearch();
        break;

    case `do-what-it-says`:

        break;

    default:
        console.log('=================================================================');
        console.log();
        console.log('LIRI HELP: Enter command [concert-this {band}] or [spotify-this-song {song}] or [movie-this {movie}] or [do-what-it-says]');
        console.log();
}
