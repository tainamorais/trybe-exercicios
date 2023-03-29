'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        pageQuantity: 255,
        createdAt: '2023-01-05T00:00:00',
        updatedAt: '2023-02-04T00:00:00'
      },
      {
        title: 'Harry ',
        author: 'JK Rowling',
        pageQuantity: 344,
        createdAt: '2023-03-01T00:00:00',
        updatedAt: '2023-03-12T00:00:00'
      }      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
