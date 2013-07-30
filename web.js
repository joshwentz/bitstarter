var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// store the contents of 'index.html' to a buffer
var buf = fs.readFileSync('./index.html', 'utf8');
var index = buf.toString();

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(index);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

