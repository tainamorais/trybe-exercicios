const { books } = require('../models');

const getAll = async () => {
  const allBooks = await books.findAll();
  return allBooks;
};

module.exports = { getAll };