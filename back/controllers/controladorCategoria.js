var Categoria = require('../models/categoria');
const categoria = require('../models/categoria');

function registrarCategoria(req,res){
    var data = req.body;

    var categoria = new Categoria();
    categoria.titulo = data.titulo;
    categoria.descripcion = data.descripcion;

    categoria.save((err,categoria_save) =>{
        if(err){
            res.status(500).send({message:'Error en el servidor'});
        }else{
            if(categoria_save){
                res.status(200).send({categoria : categoria_save});
            }else{
                res.status(403).send({message: 'No fue posible registrar la categoria ingresada'});
            }
        }
    });
}

function obtnerCategoria(req,res){
    var id = req.params['id']

    categoria.findById({_id:id},(err,categoria_data)=>{
        if(err){
            res.status(500).send({message : 'Error en el servidor'});
        }else{
            if(categoria_data){
                res.status(200).send({categoria: categoria_data});
            }else{
                res.status(403).send({message : 'La categoria no se pudo encontrar, por favor revise el id'});
            }
        }
    })
}

function editarCategoria (req,res){
     var id = req.params['id'];
     var data = req.body;

     categoria.findByIdAndUpdate({_id:id},{titulo: data.titulo,descripcion: data.descripcion},(err,categoria_update)=>{
        if(err){
            res.status(500).send({message : 'Error en el servidor'});
        }else{
            if(categoria_update){
                res.status(200).send({categoria: categoria_update});
            }else{
                res.status(403).send({message : 'no se pudo actulizae la categoria' + data.titulo});
            }
        }
     })
}

function eliminarCategoria(req,res){
     var id = req.params['id'];

     categoria.findByIdAndDelete({_id:id},(err,categoria_delete)=>{
        if(err){
            res.status(500).send({message : 'Error en el servidor'});
        }else{
            if(categoria_delete){
                res.status(200).send({categoria: categoria_delete});
            }else{
                res.status(403).send({message : 'no se pudo eliminar un registro o no exites en bd'});
            }
        }
     });
}

function listarCartegoria(req,res){
    var nombre = req.params['nombre'];

    categoria.find({titulo:new RegExp(nombre,'i')},(err,categoria_list)=>{
        if(err){
            res.status(500).send({message : 'Error en el servidor'});
        }else{
            if(categoria_list){
                res.status(200).send({categoria: categoria_list});
            }else{
                res.status(403).send({message : 'no se encontro ningun registro con ese titulo'});
            }
        }
    });

}

module.exports = {
    registrarCategoria,
    obtnerCategoria,
    editarCategoria,
    eliminarCategoria,
    listarCartegoria
}