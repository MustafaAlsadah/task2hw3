const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/mul", (req, res) => {
    const { X, Y } = req.body;
    const result = X * Y;
    res.json({ X, Y, Result: result });
}
);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});