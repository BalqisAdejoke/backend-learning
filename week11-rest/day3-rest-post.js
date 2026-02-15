const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//fake database
let users = [
    { id: 1, name: "Bola", role: "admin " },
    { id: 2, name: "Tumde", role: "user" }
];

//get all users
app.get("/users", (req, res) => {
    res.json(users);
});

//post create a new user
app.post("/users", (req, res) => {
    const { name, role } = req.body;

    //validation
    if (!name || !role) {
        return res.status(400).json({
            message: "Name and role are required"
        });
    }

    const newUser ={
        id: users.length + 1,
        name, role
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

app.listen(PORT, () => {
    console.log(`REST API running on http://localhost:${PORT}`);
});