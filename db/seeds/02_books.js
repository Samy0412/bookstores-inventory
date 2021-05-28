const db = require('../db');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return db('books').del()
    .then(function () {
      // Inserts seed entries
      return db('books').insert([
        {id: 1, book_title: 'Le petit prince', quantity: 1, status: "in stock", bookstore_id:1},
        {id: 2, book_title: 'The great Gatsby', quantity: 1, status: "in stock", bookstore_id:1},
        {id: 3, book_title: 'Hamlet', quantity: 1, status: "in stock", bookstore_id:2},

      ]);
    });
};
