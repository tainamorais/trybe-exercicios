'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ModuleTable = sequelize.define('Module', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.DECIMAL,
    qtBlock: DataTypes.DECIMAL
  },
  {
    timestamps: false,
    tableName: 'Modules',
    // underscored: true,
  });

  return ModuleTable;
};
