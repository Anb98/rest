//CONFIGUACION DE EXPRESS

const express    = require("express");
const bodyParser = require("body-parser");

const rutasProducto = require('./routes/producto');
const rutasUsuario = require('./routes/usuario');

const app = express();
//middlewares
app.use(bodyParser.urlencoded({extended:false}));       //permite recibir parametros por POST
app.use(bodyParser.json());

app.use('/api',rutasProducto);
app.use('/user',rutasUsuario);
// app.use('/api',middleware.autenticar, rutasProducto);
//aplica el middelware antes de pasar a cualquiera de las rutas

module.exports = app;