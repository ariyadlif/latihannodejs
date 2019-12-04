var http = require('http');

var server = http.createServer(function (req, res) {
	res.end("selamat datang di Nodejs");
});

server.listen(8000);

console.log("server berjalan pada url http://localhost:8000");

