const mongoose = require('../data/banco')


var InventarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    espaco: {type: Number, required: true},
    bags: {type: Number, required: true}
})

var Inventario = mongoose.model('Inventario', InventarioSchema)

module.exports = Inventario