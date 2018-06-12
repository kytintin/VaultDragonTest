const express = require('express');
const bodyParser = require('body-parser');
const movie = require('./Routes/movies');
const keys = require('./Config/dev');

var app = express();

const mongoose = require('mongoose');
var mongoURI = keys.mongoURI;
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
//Test MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use('/movies',movie);

require('./Routes/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log("Running on the port number "+ PORT)} );
