const express = require("express");
const app = express();

// middleware to read JSON body
app.use(express.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    res.send("Logged in as " + username);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

