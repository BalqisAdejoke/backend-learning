const  express = require("express");
const app = express();

app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send("User name is " + name);
});

app.listen(3000, () => {
    console.log("Server running on http:..localhost:3000");
});