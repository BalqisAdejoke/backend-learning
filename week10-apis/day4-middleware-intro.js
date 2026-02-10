const express = require("express");

const app = express();
const PORT =3000;

//custom middleware 
const loggerMiddleware =(req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next(); //move to next middleware or route
};

//apply middleware globally
app.use(loggerMiddleware);

//test route
app.get("/", (req, res) => {
    res.json({
        message: "Middleware worked!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});