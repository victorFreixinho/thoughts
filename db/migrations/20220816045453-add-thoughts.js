"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("thoughts", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("thoughts");
  },
};
