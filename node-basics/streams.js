const fs = require('fs');

const readStream = fs.createReadStream('../docs/blog4.txt', {encoding: 'utf-8'});
const  writeStream = fs.createWriteStream('../docs/blog6.txt',)

// first case


// readStream.on('data', (chunk) => {
// console.log('-----------NEW CHUNK-------------');
// console.log(chunk);
//     writeStream.write('\n-----------------NEW CHUNK-------------------\n');
//     writeStream.write(chunk);
// });.


// second case

readStream.pipe(writeStream);

