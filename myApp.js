import express from "express";
import helmet from "helmet";

const express = require('express');
const app = express();

// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000);












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
