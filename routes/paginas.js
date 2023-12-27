const rota = require('express').Router()
const Rotas = require('../routes/rotas')

rota.get('/footer',Rotas.getContatos)

// rota.get('/home',Rotas.getIndex)
rota.get('/logar',Rotas.getRegistrado)





module.exports=rota
