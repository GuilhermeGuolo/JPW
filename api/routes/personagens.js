const express = require('express');
const router = express.Router();
const Personagem = require('../models/personagem');


router.get("/", function(req, res,next){
    var num = req.query.limit;
    Personagem.find(function(err, doc){

    if (err) {
        next(err);
    } else {
        res.send(doc)
    }
    }).limit(num)
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    Personagem.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novoPersonagem = new Personagem(req.body)
    
    // Salva no mongo
    novoPersonagem.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novoPersonagem)
            res.status(200).json({ status: "Successo!", message: "Personagem adicionado!", data: novoPersonagem });
        }
        
    })
    
});

router.put("/id", function(req, res, next){
    var id = req.query.id;
    Personagem.findByIdAndUpdate(id, { nome: req.body.nome},(err,doc) =>{
        if (req.body.nome == null) {
            res.json({ status: "Falha!", message: "Erro" });
            next(err);
        } else {
            //res.send(novoMapa)
            res.status(200).json({ status: "Successo!", message: "Personagem atualizado!", data: Personagem });
        }
    })
});

router.delete("/id", function(req, res, next){
    var id = req.query.id;
    Personagem.findByIdAndDelete(id,(err,doc) =>{
        if (err) {
            res.json({ status: "Falha!", message: "Erro" });
            next(err);
        } else {
            //res.send(novoMapa)
            res.status(200).json({ status: "Successo!", message: "Personagem deletado!", data: Personagem });
        }
    })
});








module.exports = router