const db = require('../db/db');

class BookstoresDAO {
  async createBookstore(name){
    const [id] = await db('bookstores').insert(
      {
        bookstore_name:name
      }
      ).returning('id');
      return id;
  }
}

module.exports = new BookstoresDAO();