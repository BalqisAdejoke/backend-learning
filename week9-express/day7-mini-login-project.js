//bring express
const express = require("express");
const app = express();

//middleware(the security guard)
function loginCheck(req, res, next) {
    const user = req.query.user;
    
    if (user === "Bola") {
        next();
    } else {
        res.send("Login failed");
    }
}

//route that uses middleware
app.get("/login", loginCheck, (req, res) => {
    res.send("Login successful. Welcome Bola");
});

//start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});