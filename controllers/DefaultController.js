module.exports = class DefaultController {
  static home(req, res) {
    res.render("home", { content: { logged: false, thoughts: true } });
  }
  static notFound(req, res) {
    res.render("not-found");
  }
};
