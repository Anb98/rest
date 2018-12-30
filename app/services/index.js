const config = require('./../config');
const jwt    = require('jsonwebtoken');

module.exports={
    crearToken(user){
        return jwt.sign({sub: user.id},config.token,{expiresIn:'1d'});
                                // PAYLOAD || SECRET     || Expira en 1 dia
    },
    verificarToken(token){
        
        const promesa = new Promise((resolve, reject)=>{
            try {
                const payload = jwt.verify(token,config.token);    
                resolve(payload);

            } catch (error) {
                if(error.name=='TokenExpiredError')
                    reject({
                        status:401,
                        message:'El token ha expirado'
                    });
                else
                    reject({
                        status:500,
                        message:error.message
                    });
            }
        });
    
        return promesa;
    }

};
