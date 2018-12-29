const mongoose = require('mongoose');
const app      = require('./app/app');
const config   = require('./app/config');

const port =config.port; 
//el puerto se asigna segun alguna variable del servidor o 3000

mongoose.connect(config.db)   //conexion a la DB de mongodb
.then(res=>{

    app.listen(port,()=>{
        console.log(`Api corriendo enn http://localhost:${config.port}`);
    });
})
.catch(err=>console.log('Error de conexion a mongodb',err));

