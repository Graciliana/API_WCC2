//const express = require('express');
const configExpress =  require('./config/configExpress');

//Criando a nossa aplicação
const app = express();

//subindo o servidor na porta 3000 e assim que subir executar uma função
app.listen(3000, () =>
    console.log('servidor rodando na porta 3000')
);
