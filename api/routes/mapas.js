const express = require('express');
const router = express.Router();
const Mapa = require('../models/mapa');


router.get("/", async function(req, res,next){
    try {
        const mapas = await Mapa.find({nome: new RegExp(req.query.nome, 'i')})
        .limit(parseInt(req.query.limit))
        .exec();
        
        res.send(mapas)

    } catch (err) {
        res.status(404).send("Erro 404!")
    }
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    Mapa.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novoMapa = new Mapa(req.body)
    
    // Salva no mongo
    novoMapa.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novoMapa)
            res.status(200).json({ status: "Successo!", message: "Mapa adicionado!" });
        }
        
    })
    
});

router.put("/id", function(req, res, next){
    var id = req.query.id;
    Mapa.findByIdAndUpdate(id, { nome: req.body.nome},(err,doc) =>{
        if (req.body.nome == null) {
            res.json({ status: "Falha!", message: "Erro" });
            next(err);
        } else {
            //res.send(novoMapa)
            res.status(200).json({ status: "Successo!", message: "Mapa atualizado!" });
        }
    })
});

router.delete("/id", function(req, res, next){
    var id = req.query.id;
    Mapa.findByIdAndDelete(id,(err,doc) =>{
        if (err) {
            res.json({ status: "Falha!", message: "Erro" });
            next(err);
        } else {
            //res.send(novoMapa)
            res.status(200).json({ status: "Successo!", message: "Mapa deletado!" });
        }
    })
});








module.exports = router