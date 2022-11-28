const BookModel = require('../models/book.model')
const e = require("express");

exports.getListBook =async (req,res,next)=>{
    var listBook=await BookModel.find();
    res.render('./book/list-book',{listBook:listBook});
}
exports.getFormAddBook = (req,res,next)=>{
    res.render('./book/add-book');
}
exports.postAddBook = (req,res,next)=>{
    console.log(req.body);
    const objBook = new BookModel({
        name: req.body.book_name,
        price: Number(req.body.book_price),
        author: req.body.book_author
    });
    objBook.save(function (arr){
        if(arr){
            console.log(arr)
        }else {
            console.log("ghi thanh cong")
        }
    })
    res.redirect('/book/');
}
exports.getFormEditBook = async (req,res,next)=>{
    console.log(req.params)

    let itemBook = await BookModel.findById(req.params.id).exec().catch(function (err) {
        console.log(err);
    });
    console.log(itemBook)
    if(itemBook ==null){
        res.send('Không tìm thấy bản ghi');
    }
    res.render('./book/edit-book',{itemBook:itemBook});
}
exports.postEditBook = (req,res,next)=>{

    console.log(req.body);
    let dieu_kien = {
        _id : req.params.id
    }
    let du_lieu = {
        name: req.body.book_name,
        price: Number(req.body.book_price),
        author: req.body.book_author
    }
    BookModel.updateOne(dieu_kien,du_lieu,function (err,res) {
        if(err){
            res.send("lỗi cập nhật: "+err.message)
        }
    })
    res.redirect('/book/');
}
exports.getFormDeleteBook = async (req,res,next)=>{
    console.log(req.params)

    let itemBook = await BookModel.findById(req.params.id).exec().catch(function (err) {
        console.log(err);
    });
    console.log(itemBook)
    if(itemBook ==null){
        res.send('Không tìm thấy bản ghi');
    }
    res.render('./book/delete-book',{itemBook:itemBook});
}
exports.postDeleteBook = (req,res,next)=>{
    let dieu_kien = {
        _id : req.params.id
    }
    BookModel.deleteOne(dieu_kien,function (err) {
        if (err)
        {
            console.log(err)
        }else {
            console.log('Xóa thành công')
        }
    })

    res.redirect('/book/');
}
