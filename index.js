const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const testRoutes = require("./routes/testRoutes");
const defaultRoutes = require("./routes/defaultRoutes");

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

app.use("/test", testRoutes);
app.use("/", defaultRoutes);

app.listen(PORT);
