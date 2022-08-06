const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// For POST/PUT requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT);
