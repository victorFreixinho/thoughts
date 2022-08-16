const { Sequelize } = require("sequelize");
const models = require("../models");
const dbConfig = require("../config/database.json");

const conn = new Sequelize(dbConfig[process.env.NODE_ENV]);

(async () => {
  try {
    await conn.authenticate();
    console.log("Successfully connected!");
    models.init(conn);
  } catch (error) {
    console.error("Error trying to connect: ", error);
  }
})();

module.exports = conn;
