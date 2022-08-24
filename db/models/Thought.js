"use strict";
const { Model } = require("sequelize");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  class Thought extends Model {
    static associate(models) {
      models.Thought.belongsTo(models.User, {
        as: "author",
      });
    }
  }
  Thought.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      message: DataTypes.STRING,
      author_id: {
        type: DataTypes.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Thought",
      tableName: "thoughts",
      underscored: true,
    }
  );
  return Thought;
};
