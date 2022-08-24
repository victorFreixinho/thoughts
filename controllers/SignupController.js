const db = require("../db");

module.exports = {
  showSignupPage: (req, res) =>
    res.render("signup", { app: { logged: false, signup: true } }),
};
