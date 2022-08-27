const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router.js') // file
const genreRouter = require('./routes/genre.router.js') // file
const movieGenreRouter = require('./routes/movie.genre.router.js') // file
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter); // one for the movies
app.use('/api/genre', genreRouter); // one for genres
app.use('/api/movieGenre', movieGenreRouter); // one for the genres associated with a movie

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
