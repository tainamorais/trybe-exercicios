const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  
  const allBooks = await bookService.getAll();
  // console.log('HELLOOOO!!!');
  res.status(200).json(allBooks);
};

module.exports = { getAll };
