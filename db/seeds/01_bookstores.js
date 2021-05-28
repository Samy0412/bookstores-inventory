const db = require('../db');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return db('bookstores').del()
    .then(function () {
      // Inserts seed entries
      return db('bookstores').insert([
        {id: 1, bookstore_name: 'Draw & Quaterly'},
        {id: 2, bookstore_name: 'Renaud-Bray'},
      ]);
    });
};
