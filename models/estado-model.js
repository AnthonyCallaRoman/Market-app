const mongoose = require('mongoose');
const { Schema } = mongoose;

const Estado = new Schema({
    descripcion: {type: String}
})

module.exports = mongoose.model('estado',Estado)