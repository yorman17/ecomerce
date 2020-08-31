var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombres:{
        type:String,
        required: true},
    apellidos: {
        type:String,
        required: true},
    email:{
        type:String,
        required: true},
    password:String,
    role:{
        type:String,
        required: true},
    estado:{
        type:String,
        required: true},
});

module.exports = mongoose.model('user',UserSchema);