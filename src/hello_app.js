var http = require('http');
var server=http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hello World');
});
server.listen(8081);
console.log('server running at http://127.0.0.1:8081/');