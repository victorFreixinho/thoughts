const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const conn = new Sequelize(dbConfig[process.env.NODE_ENV]);

module.exports = conn;
