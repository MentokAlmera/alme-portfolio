'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comments', [
      {
        name: "Alme",
        Comment: "You so pretty",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hapi",
        Comment: "You so cute",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "rori",
        Comment: "rawr",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
