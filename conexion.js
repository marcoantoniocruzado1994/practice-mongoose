const mongoose = require('mongoose');


const URI = 'mongodb://localhost:27017/marcomongo';
const db = mongoose.connection;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('open', _ => {
    console.log("la base de datos esta conectada", URI);

})

db.on('error', err => {
    console.log(err);

})