const http = require('http')

http.createServer((request, response) => {
    response.write('1')
    response.write('23');
    response.end();
    // response.write('4');
}).listen(88)