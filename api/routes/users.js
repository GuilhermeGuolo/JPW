const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get("/", async function(req, res,next){
    try {
        const itens = await User.find({nome: new RegExp(req.query.nome, 'i')})
        .limit(parseInt(req.query.limit))
        .exec();
        
        res.send(itens)

    } catch (err) {
        res.status(404).send("Erro 404!")
    }
    
});

router.get("/id", function(req, res,next){
    var id = req.query.id;
    User.findById(id, (err,doc) =>{
        if (err) {
            next(err);
        } else {
            res.send(doc)
        }
    });  
});



router.post("/", function(req, res, next){
    var novoUser = new User(req.body)
    
    // Salva no mongo
    novoUser.save(function(err, doc){
        if (err) {
            next(err);
        } else {
            //res.send(novoUser)
            res.status(200).json({ status: "Successo!", message: "User adicionado!", data: novoUser });

        }
        
    })
    
});


module.exports = router