var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  
  var dt = new Date().toISOString();
  console.log('ISO Datetime: ' + dt);
  
  response.writeHead(200);
  response.end('Hello World, ISO DateTime: ' + dt);  
};
var www = http.createServer(handleRequest);
var port = 8090;
www.listen(port);
console.log('Listening at ' + port);
