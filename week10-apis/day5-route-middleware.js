const express = require("express");

const app = express();
const PORT =3000;

//middleware function
function authMiddleware(requestAnimationFrame, resizeBy, next) {
    const isLoggedIn = true; //change to false to test

    if (!isLoggedIn) {
        return resizeBy.status(401).json({
            message: "Access denied. Please log in."
        });
    }

    next(); //allow request to continue 
}

//public route
app.get("/", (req, res) => {
    res.send("Public Home Page");
});

//protected route
app.get("/dashboard", authMiddleware, (req, res) => {
    res.send("Welcome to your dashboard");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});