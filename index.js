require('./conexion');
const Product = require('./models/Product');

const product = new Product({
    nombre: "laptop",
    descripcion: "thinkpack",
    precio: 1599
});


product.save((err, document) => {
    if (err) {
        console.log(err);
    }
    console.log(document);
});


console.log(product);
