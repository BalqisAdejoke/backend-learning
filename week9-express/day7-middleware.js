const express = require("express");
const app = express();

function checkUser(req, res, next) {
   const user = "Bola";

   if (user ==="Bola") {
    console.log("User allowed");
    next();
   } else {
    res.send("Access denied");
   }
}

app.use(checkUser);

app.get("/", (req, res) => {
    res.send("Welcome Bola");
});

app.listen(3000, () => {
    console.log("Server running on port 3000"); 
});