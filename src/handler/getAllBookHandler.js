const books = require('../books');

const getAllBookHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});

module.exports = { getAllBookHandler };
