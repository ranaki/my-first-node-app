var http = require('http');
var fs = require('fs');

var port = 8080;

http.createServer( function(request, response) {
     //change the Content type for text or html
    //response.end("My first node app");
    fs.readFile('index.html', function(err, content) {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("failed");
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        }
        
    });
    
}).listen(port); //http create server will listen on on this port

console.log('server running on port ' + port);
