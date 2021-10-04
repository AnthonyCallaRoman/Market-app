const mongoose = require('mongoose');
const { Schema } = mongoose;

const Usuario = new Schema({
    nombre: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {},
    
})

module.exports = mongoose.model('usuario',Usuario)