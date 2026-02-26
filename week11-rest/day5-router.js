const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//import users route
const userRoutes = require("./routes/users");

//mount route
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});