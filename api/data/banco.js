const mongoose = require('mongoose')

var url = "mongodb://localhost/inventario"
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(url, options)

mongoose.connection.on('connected', () =>{
    console.log("O mongo foi conectado...")
})

module.exports = mongoose