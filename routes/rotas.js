const express = require('express')
const clientes = require('./db');
const valor = require('./logar')
const usuario = ''

exports.getContatos= (req, res) => {
    res.render('footer')   
}
// }
// exports.getIndex = (req,res) => {   
//     res.render('index')  
// }

exports.getRegistrado =(req,res) =>{
    res.render('login')
}

