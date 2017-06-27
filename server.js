var http = require('http');
var mod3 = require('./modules/moduleThree.js');

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(mod3.text);
  response.write(mod3.moduleThree());
  response.end();
});

server.listen(8000);
console.log('listening on port 8000')
