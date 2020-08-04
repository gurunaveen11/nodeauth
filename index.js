require('./src/models/user');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const config = require('./src/configurations/config.json');



const dbhost = config.db.dev.host;
const dbport = config.db.dev.port;
const dbname = config.db.dev.database;
const dbconnection = dbhost+":"+dbport+"/"+dbname;

mongoose.connect(dbconnection,{useUnifiedTopology:true,useNewUrlParser:true});

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(routes);

app.listen(3000);
