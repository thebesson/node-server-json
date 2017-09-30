import { getActiveFilter, concatUrlParams } from './utils';

export const api = {
  getCategoriesData: (callback) => (
    fetch('http://localhost:3000/get-categories-api/')
      .then(response => callback([]))
  ),
  getInitData: (search, callback) => (
    fetch('http://localhost:3000/get-filters-api/')
      .then(response => {})
  ),
  updateBook: (params, callback) => (
    fetch('http://localhost:3000/update-book-api/?' + concatUrlParams(params))
      .then(response => callback({}))
  ),
  search: (params, callback) => (
    fetch('http://localhost:3000/search-api/?' + concatUrlParams(params))
      .then(response => callback({}))
  ),
  setFilter: (params, callback) => (
    fetch('http://localhost:3000/set-filter-api/?' + concatUrlParams(params))
      .then(response => callback({}))
  ),
  setCategory: (params, callback) => (
    fetch('http://localhost:3000/set-category-api/?' + concatUrlParams(params))
      .then(response => callback({}))
  ),
  addBook: (params, callback) => (
    fetch('http://localhost:3000/add-book-api/?' + concatUrlParams(params))
      .then(response => callback({}))
  ),
};
