const { Model, DataTypes } = require("sequelize");

class Thought extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        message: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "Thought", // We need to choose the model name
      }
    );
  }
}

module.exports = Thought;
