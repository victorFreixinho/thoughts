const Thought = require("../models/Thought");

module.exports = class ThoughtsController {
  static async getAllThoughts(req, res) {
    const thoughts = await Thought.findAll({ raw: true });

    res.render("thoughts", {
      app: { logged: false, home: true },
      thoughts,
    });
  }

  static async addThought(req, res) {
    const { title, message } = req.body;
    await Thought.create({ title, message });
    res.redirect("/");
  }

  static async deleteThought(req, res) {
    const id = req.params.id;
    await Thought.destroy({ where: { id: id } });
    res.redirect("/");
  }

  static async updateThought(req, res) {
    const { id, title, message } = req.body;
    await Thought.update(
      { title, message },
      {
        where: { id: id },
      }
    );
    res.redirect("/");
  }
};
