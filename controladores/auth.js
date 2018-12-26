const Usuario = require('./../modelos/Usuario');
const mongoose = require('mongoose');
const service = require('./../services');

module.exports={

    signUp(req,res){
        const user = new Usuario({
            nombre:req.body.nombre,
            email:req.body.email,
            password:req.body.password
        });

        user.save(error=>{
            if(error) return res.status(500).send(`Error al crear el usuario: ${error}`);

            return res.status(200).send({token: service.crearToken(user)});
        });
    },
    signIn(req,res){
        const token=req.body.token;
        return res.status(200).send({token:service.verificarToken(token)});
    }
};