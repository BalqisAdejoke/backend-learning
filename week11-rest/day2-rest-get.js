const express = require("express");
const app = express();
const PORT =3000;

//fake database
const users = [
    { id: 1, name: "Bola", role: "admin " },
    { id: 2, name: "Tunde", role: "user" }
];

//get all users
app.get("/users", (req, res) => {
    res.json(users);
});

//get user by id 
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`REST API running on http://localhost:${PORT}`);
});