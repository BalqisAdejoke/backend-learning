const express = require("express");

const app = express();
const PORT =3000;

app.use(express.json());

// route that works
app.get("/", (req, res) => {
    res.json({ message: "API is running"});
});

//route that throws an error
app.get("/crash", (req, res) => {
    throw new Error("Something went wrong!");
});

//error handling middleware (must be last)
app.use((err, req, res, next) => {
    console.log(err.message);
    
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});