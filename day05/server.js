var path = require('path');
var express = require('express')
var app = express();

app.use(express.static(path.join(__dirname, '/')))

app.get('/a', (req, res) => {
    res.send(true);
})
var server = require('http').Server(app);
var socketServer = require('ws').Server;
var wss = new socketServer({server: server, port: 88});


wss.on('connection', (client) => {
    client.on('message', (_message) => {
        console.log(_message);
        wss.broadcast(_message)
    })
})

wss.broadcast = (_message) => {
    wss.clients.forEach((client) => {
        client.send(_message);
    })
}

app.listen(8080)