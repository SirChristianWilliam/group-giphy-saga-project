const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {

    //Object format for data send
    /*
        {url: x, category_id: y}
    */

    //sql query to add giphy
    sqlText = `
        INSERT INTO "giphy"
            ("url", "category_id)
        VALUES
            ($1, $2);
    `;

    sqlParams = [req.body.url, req.body.category_id];

    pool.query(sqlText, sqlParams)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err=>{
            console.error('in post giphy error', err);
            res.sendStatus(500);
        });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
