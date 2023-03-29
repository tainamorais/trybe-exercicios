'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER
  })
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
