const path = require('path')
const bp = require('body-parser');
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const apiResult = require('./utils/apiResult');
const db = require('./utils/db');

const app = express();
const bparser = bp.urlencoded({extends: false})

app.use(express.static(path.join(__dirname, '/web/')))



app.post('/register', bparser, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let nickname = req.body.nickname;

    // db.insert()
    // db.select();
    // db.delete();
    // db.update()

    // mongoClient.connect('mongodb://localhost:27017', (error, client) => {
    //     client.db('gz1801').collection('users').insert({username, password, nickname}, (error, result) => {
    //         res.send(apiResult(true, result));
    //     })
    // }) 
})

app.post('/login', (req, res) => {
    res.send(apiResult(true))
})



app.listen(88)