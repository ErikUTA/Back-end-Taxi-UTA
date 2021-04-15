const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');
const { Mongoose } = require('mongoose');

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors({}));

//Routes

app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/choferCarros',require('./routes/choferCarros.routes'));
app.use('/api/viajeChofer',require('./routes/viajeChofer.routes'));
app.use('/api/login',require('./routes/login'));
app.use('/api/reportes',require('./routes/reportes.routes'));
app.use('/api/pagos',require('./routes/pagos.routes'));



//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port "+app.get('port'));
});