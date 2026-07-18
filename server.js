const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {

    console.log("Request received...");

    // Wait for 10 seconds
    await new Promise(resolve => setTimeout(resolve, 10000));

    res.send("🚀 Hello from Cloud Run CI/CD! This is Anvith");

});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});