module.exports = class DefaultController {
  static home(req, res) {
    res.render("home", {
      app: { logged: false, home: true },
      thoughts: [
        {
          title: "pensamento1",
          message: "testando",
          author: { name: "name1", email: "name1@gmail.com" },
        },
        {
          title: "pensamento 2",
          message: "está funcionando",
          author: { name: "name2", email: "name2@gmail.com" },
        },
        {
          title: "pensamento 3",
          message: "pudim",
          author: { name: "name3", email: "name3@gmail.com" },
        },
      ],
    });
  }
  static notFound(req, res) {
    res.render("not-found");
  }
};
