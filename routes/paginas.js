const rota = require('express').Router()
const Rotas = require('../routes/rotas')


rota.get('/contatos',Rotas.getContatos)
rota.get('/home',Rotas.getIndex)
rota.get('/prod',Rotas.getProduto)





module.exports=rota
