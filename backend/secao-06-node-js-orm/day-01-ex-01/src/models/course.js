/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER
  });
  Course.associate = (models) => {
    Course.hasMany(models.Student, {  // nome do modelo
      foreignKey: 'idCourse',
      // Nome da relação entre curso e estudante. Neste caso, estudante tem só um curso. 1:N
      as: 'students',
    })
  };
  return Course;
};

/*
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Course',
  });

*/
