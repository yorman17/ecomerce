var jwt = require ('jwt-simple');
var moment = require ('moment');
var secret = 'pruebaias'

//generar token
exports.createtoken = function(user){
    var payload ={
        sub: user.nombres, // por ocnvecion es el id de un registro
        apellidos:user.apellidos,
        email:user.email,
        role:user.role,
        iat : moment().unix(),
        exp : moment().add(30,'days').unix(),
    }
    
    return jwt.encode(payload,secret);
}
