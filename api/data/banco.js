const mongoose = require('mongoose')

var url = "mongodb+srv://qualkernome:06915036@cluster0-ridpu.mongodb.net/test?retryWrites=true&w=majority" //"mongodb://localhost/inventario"
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(url, options)

mongoose.connection.on('connected', () =>{
    console.log("O mongo foi conectado...")
})

module.exports = mongoose