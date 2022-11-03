require('dotenv').config();
const express = require('express');
const axios=require('axios'); 
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/:q', (req, res) => {
        ///AXIOS TO GIPHY API
        axios({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search',
                  params: {
                        api_key: process.env.GIPHY_API_KEY,
                        q: req.params,
                        limit:10
                }
        })
            .then((apiRes)=>{
                  res.send(apiRes.data);
            })
            .catch((err)=>{
                  console.error('in GET giphy error', err);
                  res.sendStatus(500);
            })
                
      });






module.exports = router;