const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//fake database
let users = [
    { id: 1, name: "Bola", role: "admin" },
    { id: 2, name: "Tunde", role: "user" }
];

//get all users
app.get("/users", (req, res) => {
    res.json(users);
});

//put update user
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, role } = req.body;

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (!name || !role) {
           return res.status(400).json({
            message: "Name and role are required"
        });
    }

    user.name = name;
    user.role = role;

    res.json({
        message: "User updated successfully",
        user
    });
});

//delete 
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({
            messsage: "User not found"
        });
    }

    users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`REST API running on http://localhost:${PORT}`);
    
});


