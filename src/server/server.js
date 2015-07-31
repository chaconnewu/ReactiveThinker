var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var port = 3000;

BASE_DIR = path.join(__dirname, '../../');
var CLIENT_DIR = path.join(BASE_DIR, '/src/client');

app.use('/', express.static(CLIENT_DIR));
app.get('/', function(req, res) {
  res.sendFile(path.join(CLIENT_DIR + '/index.html'));
});

app.listen(port);
console.log('The server starts on port ' + port);
