const express = require("express");

const app = express();
const PORT = 3000;

//home route
app.get("/", function (req, res ) {
    res.send("Welcome to my Express server");
});

//about route 
app.get("/about", function (req, res) {
    res.send("This is the About page");
});

//start server
app.listen(PORT, function () {
    console.log('Server running on http://localhost:${PORT}');
});