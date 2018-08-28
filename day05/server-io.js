const path = require('path');
const express = require('express')
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

//[{}]
var onlinePersons = {};

app.use(express.static(path.join(__dirname, '/')))

io.on('connection', (client) => {
    client.on('serverLogin', (_person) => {
        let person = JSON.parse(_person);
        onlinePersons[person.id] = person;

        io.emit('createPerson', JSON.stringify(onlinePersons));
    })

    client.on('serverMove', (_person) => {
        let person = JSON.parse(_person);
        if(onlinePersons[person.id]){
            onlinePersons[person.id].x = person.x;
            onlinePersons[person.id].y = person.y;
        }

        io.emit('move', _person);
    })
})

http.listen(88);