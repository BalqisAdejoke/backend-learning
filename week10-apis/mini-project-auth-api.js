const express = require("express");

const app = express();
const PORT =3000;

app.use(express.json());

//fake user (simmulating a database)
const USER = {
    username: "Bola",
    password: "1234"
};

//auth middleware
function authMiddleware(req, res, next){
    const { username } = req.body;

    if (username !== USER.username){
        return res.status(401).json({
            message: "Unauthorized access"
        });
    }

    next();
}

//login route
app.post("/login", (req, res, next) => {
    try{
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        if (
            username === USER.username &&
            password === USER.password
        ) {
            return res.status(200).json({
                message: "Login successful"
            });
        }

        return res.status(401).json({
            message: "Invalid credentials"
        });
    } catch (error) {
        next(error);
    }
});

//protected route
app.post("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to your dashboard, Bola"
    });
});

//global error handler (must be last)
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Auth API running on http://localhost:${PORT}`);
});