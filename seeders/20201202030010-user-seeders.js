"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hasby",
          profession: "Frontend",
          role: "admin",
          email: "mhasbyn@gmail.com",
          password: await bcrypt.hash("rahasia1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Udean",
          profession: "Backend",
          role: "student",
          email: "udean@gmail.com",
          password: await bcrypt.hash("rahasiaku1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
