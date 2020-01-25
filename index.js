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

//hola weon que haces
//otro comentario
//mira estoy  separandolas cosas 
// y aprendiendo a hacer  mis cosas yo solo 
//estoy en la rama de marco



console.log(product);
