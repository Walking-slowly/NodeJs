const fs = require('fs');
const http = require('http');
http.createServer((request, response) => {
   /*fs.readFile('a.js', (error, data) => {
       response.end(data); 
   })*/

   /*fs.writeFile('test.txt', 'gz1801', (error) => {
       if(error){
          response.end('write error')
       } else {
          response.end('write success');
       }
   })*/

   let img = fs.readFileSync('1.png');
   response.end(img);

}).listen(88);