const { json } = require('body-parser');
const bookstoresService = require('../service/bookstores.js');

class BookstoresController {
  async createBookstore(req,res){

    try{
      const id = await bookstoresService.createBookstore(req.body);
      res.status(201).json(id);
    }
    catch (err) {
      console.error(err);
      res.status(500).json("something went wrong")
    }

  }
}

module.exports = new BookstoresController();