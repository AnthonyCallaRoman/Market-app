const mongoose = require('mongoose');
const { Schema } = mongoose;

const Categoria = new Schema({
    descripcion: {type: String}
})

module.exports = mongoose.model('categoria',Categoria);