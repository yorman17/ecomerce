var Cliente = require('../models/cliente');

function registrarCliente(req,res){
    let data = req.body;
    var cliente = new Cliente();
    cliente.nombres = data.nombres;
    cliente.dni = data.dni;
    cliente.email = data.email;
   

    cliente.save((err,cliente_save)=>{
        if(cliente_save){
            res.status(200).send({cliente: cliente_save});
        }else{
            res.status(500).send(err);
        }
    });

}

function editarCliente(req,res){
    let id = req.params['id'];
    let data = req.body;

    Cliente.findOneAndUpdate(id,{nombres: data.nombres, dni:data.dni, correo: data.correo}, (err,cliente_edit)=>{
        if(cliente_edit){
            res.status(200).send({cliente: cliente_edit});
        }else{
            res.status(500).send(err);
        }
    })
}

function listarCliente(req,res){
    Cliente.find((err,clientes_data)=>{
        if(clientes_data){
            res.status(200).send({clientes: clientes_data});
        }else{
            res.status(403).send({message: 'No hay clientes en la bd'});
        }
    })
}

function getCliente(req,res){
    var id = req.params['id'];

    Cliente.findById(id,(err,cliente_data)=>{
        if(cliente_data){
            res.status(200).send({cliente:cliente_data});
        }
    })
}


function eliminarCliente(req,res){
    let id = req.params['id'];

    Cliente.findByIdAndRemove(id,(err,cliente_delete)=>{
        if(cliente_delete){
            res.status(200).send({cliente:cliente_delete});
        }else{
            res.status(500).send(err);
        }
    })
}

module.exports = {
    registrarCliente,
    editarCliente,
    listarCliente,
    getCliente,
    eliminarCliente
}