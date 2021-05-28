const bookstoresDAO = require('../dao/bookstores');

class BookstoresService {
  createBookstore(bookstoreData){
    const {name} = bookstoreData;
    return bookstoresDAO.createBookstore(name);
  }
}

module.exports = new BookstoresService();