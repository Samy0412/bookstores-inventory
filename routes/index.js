const express = require("express");
const router = express.Router();
const bookstoresController = require('../controller/bookstores');

router.post('/bookstores', bookstoresController.createBookstore)

module.exports = router;