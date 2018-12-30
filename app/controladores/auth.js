const Usuario = require('./../modelos/Usuario');
const service = require('./../services');
const sha1 = require('js-sha1');

module.exports={

    signUp(req,res){
        const user = new Usuario({
            nombre:req.body.nombre,
            email:req.body.email,
            password:sha1(req.body.password)
        });

        user.save(error=>{
            if(error) return res.status(500).send(`Error al crear el usuario: ${error}`);

            return res.status(200).send({token: service.crearToken(user)});
        });
    },
    signIn(req,res){
        const user = {
            email:req.body.email,
            password:sha1(req.body.password)
        };

        Usuario.find(user)
        .then(registro=>{
            if(registro.length==0) return res.status(404).send({'message':'datos no encontrados'});

            return res.status(200).send({token: service.crearToken(registro), user:registro});
        });
    }
};