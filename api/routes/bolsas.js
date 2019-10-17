const express = require('express');
const router = express.Router();
const Bolsa = require('../models/bolsa');


router.get("/", function(req, res,next){
    var num = req.query.limit;
    Bolsa.find(function(err, doc){

    if (err) {
        next(err);
    } else {
        res.send(doc)
    }
    }).limit(num)
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    Bolsa.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novaBolsa = new Bolsa(req.body)
    
    // Salva no mongo
    novaBolsa.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novaBolsa)
            res.status(200).json({ status: "Successo!", message: "Bolsa atualizada!", data: novaBolsa });
        }
        
    })
    
});

router.put("/id", function(req, res, next){
    var id = req.query.id;
    Bolsa.findByIdAndUpdate(id, { nome: req.body.nome},(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novaBolsa)
            res.status(200).json({ status: "Successo!", message: "Bolsa atualizado!", data: novaBolsa });
        }
    })
});

router.delete("/id", function(req, res, next){
    var id = req.query.id;
    Bolsa.findByIdAndDelete(id,(err,doc) =>{
        if (err) {
            next(err);
        } else {
            //res.send(novaBolsa)
            res.status(200).json({ status: "Successo!", message: "Bolsa deletada!", data: novaBolsa });
        }
    })
});








module.exports = router