var http = require('http');
var port = 8080;

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("My first node app");
}).listen(port); //http create server will listen on on this port

console.log('server running on port ' + port);
