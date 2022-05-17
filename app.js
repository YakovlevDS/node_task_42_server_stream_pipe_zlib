require("http").createServer((q,s)=>s.end('Hi')).listen(10);

const fs = require("fs");
 
// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!\n");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("Завершение записи");
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// readableStream.on("data", chunk=>{ 
//     console.log(chunk);
// });
 

const zlib = require("zlib");
  
let readableStream = fs.createReadStream("hello.txt", "utf8");
  
let writeableStream = fs.createWriteStream("hello.txt.gz");
  
let gzip = zlib.createGzip();
  
readableStream.pipe(gzip).pipe(writeableStream);
