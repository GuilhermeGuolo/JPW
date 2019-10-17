const mongoose = require('../data/banco')


var ItemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    peso: {type: Number, required: true},
    raridade: {type: String, required: true },

})

var Item = mongoose.model('Item', ItemSchema)

module.exports = Item