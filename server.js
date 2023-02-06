const express = require('express');
const app = express();
const port  = process.env.PORT || 3000; 
const characters = require('./routes/api/characters');
const films = require('./routes/api/films');

// define routes 
app.use('/api/characters', characters); 
app.use('/api/films', films); 

app.listen(port, () => console.log(`Server started on port ${port}`));


