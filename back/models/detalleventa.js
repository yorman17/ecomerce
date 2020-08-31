var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var DetalleVentaSchema = Schema({
    idProdcuto: {type: Schema.ObjectId,ref: 'producto'},
    catidad: Number,
});

module.exports = mongoose.model('detalleventa',DetalleVentaSchema);