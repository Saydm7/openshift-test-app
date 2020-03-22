/*var app = require('../server/server');
var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 8080;

app.listen(port, ip, function() {
  console.log('running at ' + ip + ':' + port);
});*/


require('http').createServer((req, res) => {
 res.end( 'Hello World V1')
}).listen(8080)
