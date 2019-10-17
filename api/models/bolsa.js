const mongoose = require('../data/banco')


var BolsaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    espaco: {type: Number, required: true}
})

var Bolsa = mongoose.model('Bolsa', BolsaSchema)

module.exports = Bolsa