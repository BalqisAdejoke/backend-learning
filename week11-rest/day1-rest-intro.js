const { log } = require("console");
const express = require("express");

const app = express();
const PORT =3000;

app.use(express.json());

//get
app.get("/users", (req, res) => {
    res.json({
        message: "Fetching all users"
    });
});

//post
app.post("/users", (req, res) => {
    res.json({
        message: "Creatig a new user"
    });
});

//put
app.put("/users/:id", (req, res)=> {
    res.json({
        message: `Updating user with id ${req.params.id}`
    });
});

//delete
app.delete("/users/:id", (req, res) => {
    res.json({
        message: `Deleting user with id ${req.params.id}`
    });
})

app.listen(PORT, () => {
    console.log(`REST API running on http://localhost:${PORT}`);
});