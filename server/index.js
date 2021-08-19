require('newrelic');
const express = require('express');
const path = require('path');
const info = require('../info.js');

const router = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());

// routes
app.use('/', router);

app.get(`/${info.loaderio_verification}.txt`, (req, res) => {
  res.sendFile(path.join(__dirname, `${info.loaderio_verification}.txt`));
});

// app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
