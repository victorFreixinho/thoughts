const Thought = require("./Thought");

module.exports = {
  init: (sequelize) => {
    // init models here
    Thought.init(sequelize);
  },
  Thought,
};
