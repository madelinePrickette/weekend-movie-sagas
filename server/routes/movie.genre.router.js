const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

    console.log('This is the movie id recieved from the client:', req.params.id);

    const queryText = 
    `
    SELECT "movies".title, "genres".name FROM "genres"
    JOIN "movies_genres"
    ON "genres".id = "movies_genres".genre_id
    JOIN "movies"
    ON "movies_genres".movie_id = "movies".id
    WHERE "movies".id = $1;
    `;
    const queryValues = [req.params.id]

    pool.query(queryText, queryValues)
        .then( result => {
            res.send(result.rows)
        }).catch( err => {
            console.log('error in movie.genre.router.js', err)
            res.sendStatus(500);
        })
})

module.exports = router;