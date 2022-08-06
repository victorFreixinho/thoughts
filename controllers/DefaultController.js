module.exports = class DefaultController {
  static home(req, res) {
    res.render("home");
  }
  static notFound(req, res) {
    res.render("not-found");
  }
};
