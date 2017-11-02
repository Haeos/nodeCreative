var http = require('http');

// our created modules
var db = require('./database');

// Handle a general user request
function handleRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var jokesJson = db.getJokesFromDB();
    response.end(jokesJson);
}

http.createServer(handleRequest).listen(80, "127.0.0.1");

console.log('Server running at http://127.0.0.1:80');
