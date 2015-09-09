var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var http = require('http');
var app = express();
var psuauth = require('psuauth');
var Q = require('q');

var port = 3000;

BASE_DIR = path.join(__dirname, '../../');
var CLIENT_DIR = path.join(BASE_DIR, '/src/client');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', express.static(CLIENT_DIR));
app.get('/', function(req, res) {
  res.sendFile(path.join(CLIENT_DIR + '/index.html'));
});

app.post('/login', function(req, res) {
  psuauth(req.body.username, req.body.password)
  .then(function(userInfo) {
    res.status(201).send('success!');
  })
  .fail(function(err) {
    res.status(401).send(err);
  });
});

app.listen(port);
console.log('The server starts on port ' + port);
