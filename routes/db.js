
const Sequelize = require('sequelize');
const sequelize = new Sequelize('power','root','123456',{
    host:"localhost",
    dialect:"mysql"
})



sequelize.authenticate().then(()=>{
    console.log('Banco de dados conectado')
}).catch((erro)=>{
    console.log('Falha de conexao: '+erro)
})

const clientes = sequelize.define('cadastros',{
    nome:{
        type:Sequelize.STRING
    },
    telefone:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    }

});

// clientes.sync({force:true})
module.exports = clientes