var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombres: {
        type:String,
        required: true},
    dni: {
        type:String,
        required: true},
    email:{
        type:String,
        required: true},
    createAtt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('cliente',ClienteSchema);