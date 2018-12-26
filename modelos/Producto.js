const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const esquemaProducto= schema({
    nombre     : String,
    img        : String,
    precio     : {type: Number, min  : 0, default: 0},
    categorias : [String],
    descripcion: String,
    creado     : {type: Date, default: Date.now},
    actualizado: Date

});

module.exports = mongoose.model('Producto',esquemaProducto);