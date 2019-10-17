const mongoose = require('../data/banco')


var PersonagemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    classe: {type: String, required: true},
    sexo: {type: String, required: true },
    carga: {type: Number, required: true}

})

var Personagem = mongoose.model('Personagem', PersonagemSchema)

module.exports = Personagem