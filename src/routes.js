const { addBookHandler } = require('./handler/addBookHandler');
const { getAllBookHandler } = require('./handler/getAllBookHandler');
const { getBookHandler } = require('./handler/getBookHandler');
const { updateBookHandler } = require('./handler/updateBookHandler');
const { deleteBookHandler } = require('./handler/deleteBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId?}',
    handler: getBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId?}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId?}',
    handler: deleteBookHandler,
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Route not found';
    },
  },
];

module.exports = routes;
