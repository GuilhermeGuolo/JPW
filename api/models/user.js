const mongoose = require('../data/banco')


var UserSchema = new mongoose.Schema({
    login: { type: String, required: true },
    senha: {type: Number, required: true}
})

var User = mongoose.model('User', UserSchema)

module.exports = User