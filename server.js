const express = require("express");
const app = express();

app.use(express.json());

const PASSWORD = "Miron";

// LOGIN ROUTE
app.post("/login", (req, res) => {
    const password = req.body.password;

    if (password === PASSWORD) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});