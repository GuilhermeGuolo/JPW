const express = require('express');
const router = express.Router();
const Inventario = require('../models/inventario');


router.get("/", function(req, res,next){
    var num = req.query.limit;
    Inventario.find(function(err, doc){

    if (err) {
        next(err);
    } else {
        res.send(doc)
    }
    }).limit(num)
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    Inventario.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novoInventario = new Inventario(req.body)
    
    // Salva no mongo
    novoInventario.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novoInventario)
            res.status(200).json({ status: "Successo!", message: "Inventário adicionado!", data: novoInventario });

        }
        
    })
    
});

router.put("/id", function(req, res, next){
    var id = req.query.id;
    Inventario.findByIdAndUpdate(id, { nome: req.body.nome},(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novoPersonagem)
            res.status(200).json({ status: "Successo!", message: "Inventário atualizado!", data: Inventario });
        }
    })
});

router.delete("/id", function(req, res, next){
    var id = req.query.id;
    Inventario.findByIdAndDelete(id,(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novoPersonagem)
            res.status(200).json({ status: "Successo!", message: "Inventário deletado!", data: Inventario });
        }
    })
});








module.exports = router