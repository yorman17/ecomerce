var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    titulo: {
        type:String,
        required: true},
    descripcion: {
        type:String,
        required: true},
    imagen: String,
    precio_compra:{
        type:Number,
        required: true},
    tasa_impuesto:{
        type:Number,
        required: true},
    stock:{
        type:Number,
        required: true},
    idcategoria: {type:Schema.ObjectId, ref: 'categoria'} 
});

module.exports = mongoose.model('producto',ProductoSchema);