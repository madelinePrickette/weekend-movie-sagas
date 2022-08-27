# Movie List Tasks

[x] create database
[x] run queries in db

[installs]
[x] npm install
[x] install redux
[x] install redux logger
[x] install redux saga
[x] install dotenv (npm install dotenv)

[coderead]
[x] commenting on existing code

[show-movie-deets]
[x] make movie item component and move code from list to item
[x] pass movie as prop
[x] make details component
[x] make new reducer for the movie that was clicked (thisMovie)
[x] on click of movie send user to that movie details page at that movie's id (/details/${movie.id})
[x] in the MovieItem on the same click send the movie in the action.payload so all its info is stored in the new reducer in index.js
[x] in details, useSelector the movie details from the new movie reducer (thisMovie)

[show-genre-deets-with-movie]
[ ] somehow get all genres as indicated in genre.router.
[ ] would i prefer to write a query to get the specific genres of the movie with the id? kinda
[ ] use the junction table to join and select all genre names that are applicable to that movie jusing join