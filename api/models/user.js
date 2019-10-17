const mongoose = require('../data/banco')


var UserSchema = new mongoose.Schema({
    login: { type: String, required: true },
    senha: {type: Number, required: true}
})

var Bolsa = mongoose.model('Bolsa', BolsaSchema)

module.exports = Bolsa