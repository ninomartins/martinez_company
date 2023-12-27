const express = require('express');
const router = express.Router();
const cadastros_db = require('./db');
var cliUser
// cadastro banco


/* GET users listing. */
router.post('/cadastrado', (req, res) => {
 
   const valor = req.body
   cadastros_db.create({

     nome:valor.nome,
     telefone:valor.telefone,
     email:valor.email,
     cidade:valor.cidade,
     estado:valor.estado,

    }).then(()=>{
      res.render('logar',{
        alert:true,
        alertTitle:"Cadastrado",
        alertMenssage:"Cadastrado com socesso",
        alertIcon:'success',
        showConfirmButton:false,
        timer:2500,
        ruta:'logando'
      }) 
    }).catch((erro)=>{
     console.log("erro de envio: " + erro)
    })
  
 
 
   
  
  
});

module.exports = router;

