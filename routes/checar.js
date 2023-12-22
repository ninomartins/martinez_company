const express = require('express');
const rotaChek = express.Router();
const Clientes = require('./db');
const clientes = require('./db');

rotaChek.get('/session',(req,res)=>{
    if(!req.session.views )req.session.views = 1;
    else req.session.views ++;
    let vie = req.session.views
    res.render('contador',{counter:vie})
  });
rotaChek.get('/setcookie',(req,res)=>{
    res.cookie('proCookie','eu sou um cookie',{maxAge:9000000,httpOnly:true})
    res.end()
});
rotaChek.get('/cookie',(req,res)=>{
    const {proCookie} = req.cookies;
    res.clearCookie('proCookie')
    res.send(proCookie)
});




module.exports=rotaChek

