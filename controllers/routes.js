
//O express nos fornece 2 coisas: req e resp
//Req o que estamos recebendo e Resp o que iremos enviar
module.export = app.get('/', (req, resp) =>{
    res.send('Servidor OK')
});