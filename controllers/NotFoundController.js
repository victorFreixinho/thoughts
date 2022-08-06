module.exports = class NotFoundController {
  static notFound(req, res) {
    res.render("not-found");
  }
};
