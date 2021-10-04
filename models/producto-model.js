const mongoose = require('mongoose');
const { Schema } = mongoose;

const Producto = new Schema({
    nombre: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, trim: true },
    stock: { type: Number, required: true, trim: true },
    estado: [{ type: Schema.Types.ObjectId, ref:'estado' }],
    categoria: [{ type: Schema.Types.ObjectId, ref: 'categoria' }]
})

module.exports = mongoose.model('producto',Producto)