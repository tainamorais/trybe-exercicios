'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Tainá Morais',
        email: 'taina@morais.com',
        birthday: '1983-02-04T17:50:11',
        active: true,
        // na seed tem que ser igual ao banco
        id_course: 1
      },
      {
        name: 'Fernanda Silveira',
        email: 'fernanda@silveira.com',
        birthday: '2007-01-05T02:37:44',
        active: true,
        // na seed tem que ser igual ao banco
        id_course: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', null, {});
  },
};
