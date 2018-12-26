const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bcrypt   = require('bcrypt-nodejs');

const usuario = Schema({
    nombre          : String,
    password        : {type  : String,  select: false},
    email           : {unique: true, lowercase: true, type: String},
    avatar          : String,
    fechaRegistro   : {type  : Date, default  : Date.now()},
    fechaUltimoLogin: {type  : Date},
});

usuario.pre('save',next=>{
    let user = this;
    // if(!user.password) return next();

    bcrypt.genSalt(10,(error,salt)=>{
        if(error) return next(error);

        bcrypt.hash(user.password,salt,null,(error,hash)=>{
            if(error) return next(error);
            user.password=hash;
            return next();
        });
    })
    
    
});

module.exports= mongoose.model('Usuario',usuario);