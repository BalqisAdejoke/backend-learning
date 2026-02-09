const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required "
        });
    }

    if (username === "Bola" && password ==="1234") {
        return res.status(200).json({
            message: "LOgin successful"
        });
    }

    res.status(401).json({
        message: "Invalid credentials"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});