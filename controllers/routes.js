const Agendamento = require('../models/Agendamento')

module.export = app => {
    //O express nos fornece 2 coisas: req e resp
    //Req o que estamos recebendo e Resp o que iremos enviar
    app.get('/', (req, resp) =>{
        res.send('Servidor OK')
    });

    app.post('/agendar', (req,resp) => {
        //verificar o que está sendo recebido
        const agendamento = req.body;
        console.log(agendamento)
    })
};