const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const inventario = require('./api/routes/inventarios')
const bolsa = require('./api/routes/bolsas')
const item = require('./api/routes/itens')
const personagem = require('./api/routes/personagens')
const mapa = require('./api/routes/mapas')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/inventarios',inventario)
app.use('/bolsas',bolsa)
app.use('/itens',item)
app.use('/personagens',personagem)
app.use('/mapas',mapa)

app.use(function(req, res, next) {
	let err = new Error('404-Not found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res, next) {
  if(err.status === 404)
  	res.status(404).json({message: "404-Not found"})
  else	
    res.status(500).json({message: "500-Server error"})
})

app.listen(3000, () =>{
    console.log("Rodando...")
})

