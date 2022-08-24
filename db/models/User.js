"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Thought, {
        as: "thoughts",
        foreignKey: "author_id",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING(100),
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      defaultScope: {
        attributes: ["id", "name", "email"],
      },
      scopes: {
        users: {
          attributes: ["id", "name", "email", "password"],
        },
      },
    }
  );
  return User;
};
