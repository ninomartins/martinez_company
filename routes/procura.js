const rota = require('express').Router()

rota.post('/',(req,res,next)=>{
    let mensagem = 'NÃO CONSTA NA PAGINA'
   const search = req.body.buscar
   if(search == "contatos"){

    res.render('contatos')
}

if(search == "produtos"){
let cliente =''
    res.render('produtos',{cliente:cliente})
}

if(search == "home"){
    if(!req.session.views )req.session.views = 1;
    else req.session.views ++;
    let vis = req.session.views
    res.render('index',{visita:vis})
}
if(search == 'tempo'){
    res.redirect('https://portal.inmet.gov.br')
}
if(search == 'geradores')res.redirect('https://www.powerupgeradores.com.br')

else{
    if(!req.session.views )req.session.views = 1;
    else req.session.views ++;
    let vis = req.session.views
   res.render('index',{visita:vis})
}
    
})
module.exports=rota