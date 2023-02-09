const express = require('express');
const router = express.Router();
const axios = require('axios'); 

// @route GET api/films 
// @desc get films 
router.get('/', (req, res) => {
	axios.get('https://swapi.dev/api/films')
	.then(response => res.send(response.data)).catch(err => res.send(err.message))
})

module.exports = router; 
