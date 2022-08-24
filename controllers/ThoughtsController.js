const db = require("../db");

module.exports = class ThoughtsController {
  static async getAllThoughts(req, res) {
    const thoughts = await db.Thought.findAll({include: "author" });

    res.render("thoughts", {
      app: { logged: false, home: true },
      thoughts: thoughts.map(t => ({...t.dataValues, author: t.dataValues.author.dataValues})),
    });
  }

  static async addThought(req, res) {
    const { title, message } = req.body;
    const author_id = 1;
    await db.Thought.create({ title, message, author_id });
    res.redirect("/");
  }

  static async deleteThought(req, res) {
    const id = req.params.id;
    await db.Thought.destroy({ where: { id: id } });
    res.redirect("/");
  }

  static async updateThought(req, res) {
    const { id, title, message } = req.body;
    await db.Thought.update(
      { title, message },
      {
        where: { id: id },
      }
    );
    res.redirect("/");
  }
};
