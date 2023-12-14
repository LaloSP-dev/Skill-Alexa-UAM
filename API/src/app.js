const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev')); // Permite ver en consola lo que llega al servidor
app.use(cors());
app.use(express.json()); //Permite recibir formatos JSON
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api', require('./routes'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});