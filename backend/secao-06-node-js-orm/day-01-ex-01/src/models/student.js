/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const StudentModel = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER
  },{
    // quando o nome do modelo e da tabela nao coicindirem, ele espera que seja Students
    tableName: 'students',
    // faz conversão camelize e snakeCase
    underscored: true,
    // para criar criated_at e updated_at
    timestamps:false,
  });
  StudentModel.associate = (models) => {
    StudentModel.belongsTo(models.Course, {
      foreignKey: 'idCourse',
      // Nome da relação entre curso e estudante. Neste caso, estudante tem só um curso. 1:N
      as: 'course',
    })
  };
  return StudentModel;
};