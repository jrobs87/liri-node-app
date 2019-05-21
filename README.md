# Node Liri Bot

Node application to search for concerts on bands in town, songs on spotify, and movies on OMDB.

## Getting Started

Clone the repo > npm install.  

### Prerequisites

You will need Node.js and npm, axios, moment, dotenv, and the spotify npm package to get going.

### Installing

All dependencies will be installed from the package.json file.  
After running npm install, you will need to create a .env file to store your own Spotify API keys in the following format sans single quotes:

    '# Spotify API keys

    SPOTIFY_ID=id
    SPOTIFY_SECRET=secret'

## Usage

Run node liri and pass in one of the following commands:

- spotify-this-song (song name)
- concert-this (band name)
- movie-this (movie name)
- do-what-it-says 

node liri do-what-it-says will pass a mystery search argument.

All arguments (movie, band, song) can use spaces and span multiple words.  

In the case of no arguments being passed after the commands, each will search for one of my favorites or a default specified in the class instructions.

Running node liri with no arguments passed will log out the help instructions as noted above.

Check the img folder for screenshots of usage with each argument.

## Built With

* [Spotify API](https://www.npmjs.com/package/node-spotify-api) - The Spotify API npm link
* [OMDB API](https://maven.apache.org/) - Movie info db
* [Bands in Town API](http://www.artists.bandsintown.com/bandsintown-api) - API for concerts by band

## Contributing

Contribute away - just send me a pull request.

## Versioning

Version 1.0

## Authors

* **John Robertson** - *Initial work* - [github](https://jrobs87.github.io/portfolio/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Shoutout to GA Tech Coding Bootcamp

