var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());



// store the contents of 'index.html' to a buffer
var index = fs.readFileSync('./index.html', 'utf8');

var buf = new Buffer(256);
var buffer = buf.toString('utf8', 0, buffer.length);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //response.send(index);
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

