const books = require('../books');
const getAllBookHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let isRead, isFinish;

  if (reading != null && reading == 1) {
    isRead = true;
  } else {
    isRead = false;
  }

  if (finished != null && finished == 1) {
    isFinish = true;
  } else {
    isFinish = false;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBookHandler };
