/* let a = [1,2,'Hello',6];
console.log(a.length);
for (let i=0; i<a.length; i++) {
    console.log(a[i]);
} */
const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
    console.log(request.method);
    /* console.log(request.headers('user-agent')); */
    console.log(request.headers['user-agent']);

    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.url == '/') {
        response.end('Main <b>Page</b> Привет мир');
    } else if (request.url == '/cat') {
        response.end('Category <h2>Page</h2>');
    } else if (request.url == '/dat') {
        let myFile = fs.readFileSync('1.dat');
        console.log(myFile);
        response.end(myFile);
    }
    
}).listen(3000);