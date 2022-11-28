const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@thuchanh01.oi9jvyn.mongodb.net/bookshop');

const bookSchema=new mongoose.Schema({name: 'String',price: 'Number',author:'String'});

const Book = mongoose.model('Book',bookSchema);

module.exports=Book;