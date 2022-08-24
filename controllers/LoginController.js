const db = require("../db");

module.exports = class LoginController {
  static showLoginPage(req, res) {
    res.render("login", { app: { logged: false, login: true } });
  }
};
