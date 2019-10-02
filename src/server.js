const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const user = ''; 
const password = ''; 
const connectString = `mongodb+srv://${user}:${password}@omnistack-mudrz.mongodb.net/semana09?retryWrites=true&w=majority`;

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);