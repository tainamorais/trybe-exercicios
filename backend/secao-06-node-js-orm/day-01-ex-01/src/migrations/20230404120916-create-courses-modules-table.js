'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Courses_Modules', {
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          // exatamente a mesma da migration
          model: 'Courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      // Não faz sentido ter 2 módulos de backend no curso de backend, não faz sentido ter 2 módulos de front no curso fullstack. Este bloqueio ocorre na criação da tabela. Não pode repetir a combinação de curso com módulo, portanto, tornamos as duas chaves primárias.
      id_module: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          // exatamente a mesma da migration
          model: 'Modules',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses_Modules');
  }
};
