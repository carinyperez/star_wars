const express = require('express');
const app = express();
const cors = require('cors'); 
const port  = process.env.PORT || 5000; 
const characters = require('./routes/api/characters');
const films = require('./routes/api/films');

// define routes 
app.use('/api/characters', characters); 
app.use('/api/films', films); 

// cors error 
app.use('*', cors())

// serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static('client/build')); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Server started on port ${port}`));


