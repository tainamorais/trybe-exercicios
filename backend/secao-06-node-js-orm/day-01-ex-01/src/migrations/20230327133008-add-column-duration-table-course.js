'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Courses', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Courses', 'duration');
  },
};
