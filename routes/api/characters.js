const express = require('express');
const router = express.Router();
const axios = require('axios'); 

// @route GET api/characters
// @desc get characters 
router.get('/', (req, res) => {
	axios.get('https://swapi.dev/api/people')
	.then(response => res.send(response.data)).catch(err => res.send(err.message))
})

module.exports = router; 

