var express = require('express');
var router = express.Router();

var BookController = require('../controllers/book.controller')

router.get('/',BookController.getListBook);
router.get('/add',BookController.getFormAddBook);
router.post('/add',BookController.postAddBook);

router.get('/edit/:id',BookController.getFormEditBook);
router.post('/edit/:id',BookController.postEditBook);

router.get('/delete/:id',BookController.getFormDeleteBook);
router.post('/delete/:id',BookController.postDeleteBook);



module.exports = router;