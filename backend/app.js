'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const projectRoutes = require('./routes/docente');
const passport = require('passport');
const morgan = require('morgan');

var app = express();


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport)

//CORS
app.use(cors());

//Rutas
app.use('/api/', projectRoutes);
app.use('/api/glosarios', require('./routes/glosario.routes'));
app.use('/api/upload', require('./routes/upload.routes'));
app.use('/api/chats', require('./routes/chats.routes'));
module.exports = app;
