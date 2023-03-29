const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  console.log('Antes getAll em Controller');
  const books = await BookService.getAll();
  // console.log(books);
  res.status(200).json(books);
};

module.exports = {
  getAll,
};