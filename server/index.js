require('newrelic');
const express = require('express');
const path = require('path');
const info = require('../info.js');
const cors = require('cors');

const router = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// routes
app.use('/', router);

app.get('/', (req, res) => {
  res.send(info.root_message);
});

app.get(`/${info.loaderio_verification}`, (req, res) => {
  res.send(info.loaderio_verification);
});

// app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
