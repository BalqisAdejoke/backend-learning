const express = require("express");
const { ifError } = require("node:assert");

const app = express();
const PORT = 3000;

//middleware to read JSON body
app.use(express.json());

//GET route
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to my API",
        status: "success"
    });
});

//POST route
app.post("/api/login", (req, res) => {
    const { username } = req.body;

    if (!username){
        return res.status(400).json({
            error: "Username is required"
        });
    }

    res.json({
        message: `Logged in as ${username}`
    });
});

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
});