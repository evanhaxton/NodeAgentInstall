require('newrelic');
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Team");

});

var port = 18080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);