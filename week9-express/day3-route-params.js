const express = require("express");
const app = express();

//route with parameter
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send("User ID is " + userId);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});