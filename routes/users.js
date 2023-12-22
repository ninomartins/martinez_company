const express = require('express');
const router = express.Router();
const cadastro = require('./db');
var cliUser
// cadastro banco


/* GET users listing. */
router.post('/', (req, res) => {
 
   const valor = req.body
   cadastro.create({
    nome:valor.nome,
    telefone:valor.telefone,
    email:valor.email,
    cidade:valor.cidade,
    estado:valor.estado
   }).then(()=>{
    console.log('mendsagem enviada')
   }).catch((erro)=>{
    console.log("erro de envio: " + erro)
   })
   cadastro.findAll({order:[['id','DESC']]}).then((objt)=>{ 
    cliUser = objt
    const cliente = valor.nome
    res.render('portifolio',{cliente:cliente,pessoas:cliUser})
   
     })  
 
  
});

module.exports = router;

