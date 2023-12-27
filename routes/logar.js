const cadastros_db = require('./db');
const rotaLog = require('express').Router();
const bcsryptjs = require('bcryptjs')
var login 
var logado = false






rotaLog.post('/',async(req,res)=>{
 login = req.body.login
const senha = req.body.pass
let passwordHaash = await bcsryptjs.hash(senha, 8)
  if(login && senha){


     const user = await  cadastros_db.findAll({
    
      atributes:['id' ,'login' , 'nome','telefone','email', 'cidade','estado','senha'],
        where: {
        login:login
        } 
        })  
      if(user.length == 0 || !(await bcsryptjs.compare(senha, user[0].senha )) ){
        res.send('cliete não existe')
      }else {
        req.session.login = login
        if(req.session.login){
          logado = true
        }else{
          logado = false
        } 
        res.render('portifolio',{cliente:login})
      }    
  } 
});
   
rotaLog.get('/contatos',(req,res)=>{
  res.render('contatos',{cliente:login})
})

rotaLog.get('/deslogado',(req,res)=>{
  logado = false
  res.render('portifolio',{cliente:'off line'})
})

rotaLog.get('/produtos',(req,res)=>{
  if(logado == true){
    res.render('portifolio',{cliente:login})
  }else{
    res.render('produtos',{cliente:login})
  }
})


rotaLog.post('/logar', async (req,res)=>{
  const login = req.body.login;
  const senha = req.body.pass;
  let passwordHaash = await bcsryptjs.hash(senha, 8)
  
  cadastros_db.create({
    login:login,
    senha:passwordHaash
  }).then(()=>{
    res.render('logar',{
      alert:true,
      alertTitle:"Resgistrado",
      alertMenssage:"Registrado com socesso",
      alertIcon:'success',
      showConfirmButton:false,
      timer:2500,
      ruta:'pagina/logar'
    }) 
  }).catch((erro)=>{
    console.log("erro de envio: " + erro)
  })   
})

rotaLog.get('/logando',(req,res)=>{
  console.log(req.body.login)
         res.render('logar')      
})
rotaLog.get('/', function(req, res, next) {
 
  res.render('index',{cliente:login});
});





module.exports=rotaLog
