var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/th01',function (req,res,next) {
  mongoose.connect('mongodb+srv://admin:admin@thuchanh01.oi9jvyn.mongodb.net/thuchanh01');

  const  Th01 = mongoose.model('th01',{
    name:String,
    price:Number
  });

  //gan du lieu vao
  let objth = new Th01({name:"sach nodejs",price:3536356});

  objth.save().then(function () {
    console.log("luu thanh cong");
    res.send("them moi sach thanh cong");
  })
})

module.exports = router;
