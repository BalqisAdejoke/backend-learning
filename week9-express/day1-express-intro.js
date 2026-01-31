// import express
const express = require('express');

//create an app (our server)
const app = express();

//define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello! This is my first Express server.');
});

//start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});