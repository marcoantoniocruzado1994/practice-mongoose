const { Schema, model } = require('mongoose');
//esto que hacemos es destructuring 
const ProductSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: {
        type: Number,
        default: 0
    }
})

module.exports = model('Product', ProductSchema);