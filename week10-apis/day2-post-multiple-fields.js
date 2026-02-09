const express = require("express");
const app = express();
const PORT = 3000;

//middleware to parse JSON bodies
app.use(express.json());

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password reequired" })
    }

    //for now,just respond with a success message
    res.json({
        message: `User ${username} logged in successfully`,
        passwordReceived: password //just to show you got it(don't do this in real apps)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});