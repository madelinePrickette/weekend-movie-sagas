const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 
  `
  SELECT "genres".name FROM "genres";
  `

  pool.query(queryText)
    .then( result => {
      res.send(result.rows);
    }).catch( err => {
      console.log('error in get in genre.router.js', err)
      res.sendStatus(500)
    })
});

module.exports = router;