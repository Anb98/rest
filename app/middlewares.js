const service = require('./services');

module.exports = {
    autenticar(req, res, next){
        if (!req.headers.authorization) return res.status(403).send({mensaje: 'acceso no autorizado'});
        
        const token = req.headers.authorization.split(' ')[1]
        //divide autorization en 2 y optengo el 2 valor(el token)

        service.verificarToken(token)
        .then(idUser=>{
            req.user=idUser;
            next();
        })
        .catch(error=>res.status(error.status).send(error.message));
    }
}