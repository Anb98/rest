const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const usuario = Schema({
    nombre          : String,
    password        : {type  : String,  select: false},
    email           : {unique: true, lowercase: true, type: String},
    avatar          : String,
    fechaRegistro   : {type  : Date, default  : Date.now()},
    fechaUltimoLogin: {type  : Date},
});

module.exports= mongoose.model('Usuario',usuario);