// const http = require('http')
// const url = require('url');
// const fs = require('fs');

// http.createServer((request, response) => {
//     let urlObj = url.parse(request.url, true);
//     let data = '';
//     switch(urlObj.pathname){
//         case '/a.txt':
//             data = fs.readFileSync('a.txt');
//             break;
//         case '/async.js':
//             data = fs.readFileSync('async.js');
//             break;
//         default:
//             data = 'error';
//             break;
//     }
//     response.end(data);
// }).listen(88)

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

// path.join('E:/.../day02/', "1000phone") => "E:/1000phone" 

app.use(express.static(path.join(__dirname, '/')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.get('/', (request, response) => {
    response.send({status: false});
})



app.get('/async', (request, response) => {
    let data = fs.readFileSync('async.js');
    // console.log(data);
    response.send(data);
})

app.get('/product', (request, response) => {
    // let id = url.parse(request.url, true).query.proid
    let proid = request.query.proid;
    response.send(proid);
})
//http://localhost:88/order/123
app.get('/order/:orderid', (request, response) => {
    let orderid = request.params.orderid;
    response.send(orderid);
})

const bp = require('body-parser')
const bparser = bp.urlencoded({extended: false});

app.post('/login', bparser, (req, res) => {
    res.send(req.body);
})

app.listen(88)