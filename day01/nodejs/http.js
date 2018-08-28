const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  //let params = url.parse(request.url, true).query;
  //connect db => select data from data
  //console.log(params);


  let data = '';
  request.on('data', (_data) => {
    console.log(_data);
    data += _data;
  })

  request.on('end', () => {
     console.log(data)
     response.end('gz1801');
  })


}).listen(88);