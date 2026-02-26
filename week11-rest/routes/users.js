const express = require("express");
const router = express.Router();

// fake database
let users = [
    { id: 1, name: "Bola", role: "admin" },
    { id: 2, name: "Tunde", role: "user" }
];

// get all users
router.get("/", (req, res) => {
    res.json(users);
});

//post create user
router.post("/", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            message: "Name and role are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        role 
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

module.exports = router;