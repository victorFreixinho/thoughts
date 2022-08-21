const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const loginRoutes = require("./routes/loginRoutes");
const thoughtsRoutes = require("./routes/thoughtsRoutes");
const signupRoutes = require("./routes/signupRoutes");

const models = require("./models");
const conn = require("./db/conn");

// Get server configs based on environment
const serverConfig = require("./config/server.json")[process.env.NODE_ENV];

function startServer() {
  const app = express();

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

  app.listen(serverConfig?.port);
}

(async () => {
  if (!serverConfig) {
    console.error(
      "NODE_ENV is not configured correctly (development or production)."
    );
    return;
  }
  // Test connection and init models
  try {
    await conn.authenticate();
    console.log("Successfully connected to database!");
    models.init(conn);
    startServer();
  } catch (error) {
    console.error("Error trying to connect to database: ", error);
  }
})();
