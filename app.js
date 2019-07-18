/* let a = [1,2,'Hello',6];
console.log(a.length);
for (let i=0; i<a.length; i++) {
    console.log(a[i]);
} */
const http = require('http');


//http.createServer().listen(3000);
http.createServer(function(request, response){
    response.end('Hello my');
}).listen(3000);