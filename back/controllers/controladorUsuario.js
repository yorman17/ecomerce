var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require ('../helpers/jwt')

function registrarUsuario(req, res) {
    var params = req.body;
    var user = new User();

    if (params.password) {
        bcrypt.hash(params.password, null, null, function (err, hash) {
            if (hash) {
                user.password = hash;
                user.nombres = params.nombres;
                user.apellidos = params.apellidos;
                user.email = params.email;
                user.role = params.role;
                user.estado = params.estado;

                user.save((err, user_save) => {
                    if (err) {
                        res.status(500).send({ error: 'no se ingreso el usuario' });
                    } else {
                        res.status(200).send({ user: user_save });
                    }
                });
            }
        });
    } else {
        res.status(400).send('No se ingreso contraseña');
    }
}
function editarUsuario(req,res){
    var id = req.params['id'];
    var data = req.body;

    if(data.password){
        bcrypt.hash(data.password,null,null,function(err,hash){
            if(hash){
                User.findByIdAndUpdate({_id:id},{nombres: data.nombres, password: hash, email: data.email, role: data.role, estado:data.estado},(err,user_edit)=>{
                    if(user_edit){
                        res.status(200).send({user:user_edit});
                    }else{
                        res.status(500).send({message: 'El usuario no se pudo editar'});
                    }
                })
               
            }
        });
    }else{
        User.findByIdAndUpdate({_id:id},{nombres: data.nombres, password: hash, email: data.email, role: data.role, estado:data.estado},(err,user_edit)=>{
            if(user_edit){
                res.status(200).send({user:user_edit});
            }else{
                res.status(500).send({message: 'El usuario no se pudo editar'});
            }
        })
    }
}
function login(req, res) {
    var data = req.body;

    User.findOne({ email: data.email }, (err, user_data) => {
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' });
        } else {
            if (user_data) {
                bcrypt.compare(data.password, user_data.password, function (err, check) {
                    if (check) {
                        if (data.gettoken) {
                            res.status(200).send({ 
                                jwt : jwt.createtoken(user_data),
                                user: user_data,
                            });
                        } else {
                            res.status(200).send({
                                user: user_data,
                                message: 'No token',
                                jwt : jwt.createtoken(user_data)
                            });
                        }
                    } else {
                        res.status(403).send({ message: 'El correo o la contraseña no coinciden' })
                    }
                });
            } else {
                res.status(403).send({ message: 'El correo no existe' })
            }
        }
    });
}

function validar (){

}

module.exports = {
    registrarUsuario,
    editarUsuario,
    login,
}