const express = require('express');
const router = express.Router();
const Item = require('../models/item');


router.get("/", function(req, res,next){
    var num = req.query.limit;
    Item.find(function(err, doc){

    if (err) {
        next(err);
    } else {
        res.send(doc)
    }
    }).limit(num)
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    Item.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novoItem = new Item(req.body)
    
    // Salva no mongo
    novoItem.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novoItem)
            res.status(200).json({ status: "Successo!", message: "Item adicionado!", data: novoItem });

        }
        
    })
    
});

router.put("/id", function(req, res, next){
    var id = req.query.id;
    Item.findByIdAndUpdate(id, { nome: req.body.nome},(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novoItem)
            res.status(200).json({ status: "Successo!", message: "Item atualizado!", data: Item });

        }
    })
});

router.delete("/id", function(req, res, next){
    var id = req.query.id;
    Item.findByIdAndDelete(id,(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novoItem)
            res.status(200).json({ status: "Successo!", message: "Item deletado!", data: Item });

        }
    })
});








module.exports = router