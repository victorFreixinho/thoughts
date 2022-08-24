"use strict";

const fs = require("fs");
const path = require("path");
// const basename = path.basename(__filename);
const models_dir = path.join(__dirname, "models");

const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/config.js")[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(models_dir)
  .filter((file) => {
    return (
      // file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      file.indexOf(".") !== 0 && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // init models
    const model = require(path.join(models_dir, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  // make the associations
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
