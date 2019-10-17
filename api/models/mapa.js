const mongoose = require('../data/banco')


var MapaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: {type: String, required: true},
})

var Mapa = mongoose.model('Mapa', MapaSchema)

module.exports = Mapa