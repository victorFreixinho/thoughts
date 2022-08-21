const { Model, DataTypes } = require("sequelize");

class Thought extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
        },
        title: DataTypes.STRING,
        message: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Thought",
        tableName: "thoughts",
        underscored: true,
      }
    );
  }
}

module.exports = Thought;
