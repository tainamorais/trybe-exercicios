'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });
  return books;
};
