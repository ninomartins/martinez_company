const express = require('express')
const clientes = require('./db');
const usuario = ''
exports.getContatos= (req, res) => {
    res.render('contatos')
}
exports.getIndex = (req,res) => {
    res.render('index')
}
exports.getProduto= (req, res) => {
   
    res.render('produtos',{cliente:usuario})
 
}

