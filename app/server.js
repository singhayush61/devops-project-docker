const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Project Running");
  res.send("CI/CD Working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});