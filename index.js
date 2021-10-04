require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const app = express();


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


//Connection
db.on('error', (err) => {
    console.log('ERROR de Conexión de Mongoose: ', + err.message);
});

db.once('open', () => {
    console.log('Mongoose Conectado');
});


//Routes
app.get('/', (req, res) => {
    res.send('Hola Mundo')
});


//
app.listen(process.env.PORT, () =>  {
    console.log(`server running on port ${process.env.PORT}`);
})