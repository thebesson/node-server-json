import { getActiveFilter, concatUrlParams, filterNotNullParams } from './utils';

const PORT = window.location.port;
const isDebug = window.location.search === '?debug';

export const api = {
  getHistoryData: (callback) => callback([
    { id: 1, move: 'added', book: 'The Trial', author: 'Franz Kafka', text: 'to your Must Read Titles', time: '2 years' },
    { id: 2, move: 'added', book: 'Fight Club', author: 'Chuck Palahniuk', text: 'to your Must Read Titles', time: '2 years' },
  ]),
  getCategoriesData: (callback) => (
    callback([
        { type: 'must_read', title: 'Must Read Titles', color: '#ff517e' },
        { type: 'best', title: 'Best Of List', color: '#ffb700' },
        { type: 'classic', title: 'Classic Novels', color: '#03bedf' },
        { type: 'non_fiction', title: 'Non Fiction', color: '#847ede' },
      ])
  ),
  getInitData: (search, callback) => (
      fetch(`http://localhost:8080/books`)
        .then(response => response.json())
        .then(books => {
          const filters = [
            { type: 'all', title: 'All Books', active: true },
            { type: 'recent', title: 'Most Recent', active: false },
            { type: 'popular', title: 'Most Popular', active: false },
            { type: 'free', title: 'Free Books', active: false },
          ];
          callback({ filters, books });
      })
  ),
  updateBook: (params, callback) => (
    fetch(`http://localhost:${PORT}/api/book`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'update',
        ...filterNotNullParams(params),
      }),
    })
      .then(response => response.json())
      .then(response => callback({ books: response }))
  ),
  getBooks: (params, callback) => (
    fetch(`http://localhost:8080/books`)
      .then(response => response.json())
      .then(response => callback({ books: response }))
  ),
  addBook: (params, callback) => (
    fetch(`http://localhost:${PORT}/api/book`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'create',
        ...filterNotNullParams(params),
      }),
    })
      .then(response => response.json())
      .then(response => callback({ books: response }))
  ),
  deleteBook: (params, callback) => (
    fetch(`http://localhost:${PORT}/api/book`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'delete',
        ...filterNotNullParams(params),
      }),
    })
      .then(response => response.json())
      .then(response => callback({ books: response }))
  ),
};
