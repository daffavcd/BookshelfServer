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

  if (name == undefined && reading == undefined && finished == undefined) {
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
  }

  if (reading != undefined) {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.reading == isRead)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (finished != undefined) {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.finished == isFinish)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (name != undefined) {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
          )
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }
};

module.exports = { getAllBookHandler };
