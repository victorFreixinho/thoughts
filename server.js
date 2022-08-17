const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const loginRoutes = require("./routes/loginRoutes");
const thoughtsRoutes = require("./routes/thoughtsRoutes");
const signupRoutes = require("./routes/signupRoutes");

// Test connection and init models
require("./db/conn").connectSequelize();

const app = express();
const PORT = process.env.PORT || 3000;

// handlebars config
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views/layouts/"),
    defaultLayout: "main",
  })
);
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "hbs");

// For POST/PUT requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);
app.use("/", thoughtsRoutes);
app.use("*", (_, res) => res.render("not-found"));

app.listen(PORT);
