const express = require("express");

const app = express();
const PORT = 3000;

// basic API route
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to my first API",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
});