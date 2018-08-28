const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('a.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('a.zip'));