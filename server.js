const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("🚀 Hello from Cloud Run CI/CD! This is Anvith");
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});