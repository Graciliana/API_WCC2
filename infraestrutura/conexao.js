const mysql = require('mysql');

//criando nossa conexao com banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: 'lokaPORbike88',
    database: 'salao'     
});

conexao.connect(error =>{
    if(error){
        console.log(error);
    }else{
        //Subindo o servidor na porta 3000 e assim que subir executar uma função
        applicationCache.listen(3000, () => {
            console.log('Servidor Rodando na porta 3000')
        });
    }
});

module.exports = conexao;