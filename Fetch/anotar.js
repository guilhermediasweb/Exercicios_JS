var http = require('http');
const { json } = require('stream/consumers');
http.createServer(function(req, res) {
    res.setHeader('Access-control-allow-origin', '*');
    res.writeHead(200, {'content-type': 'application/json'});
    let numero = {
        valor: Math.round(Math.random() * 10)
    }
    res.end(json.stringify(numero));
}).listen(8080);