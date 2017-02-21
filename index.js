var uuid = require('node-uuid');
var express = require('express');
var app = express();

// Generate static UUID to be shown when calling server
var uuidValue = uuid.v4(); // e.g. 32a4fbed-676d-47f9-a321-cb2f267e2918


app.get('/', function (req, res) {
   res.send(uuidValue);
})

app.set('port', (process.env.PORT || 8080));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;

  console.log('Microservice Random UUID listening on port %s', port);
});
