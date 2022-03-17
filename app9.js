const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello there.This is the homepage.');
    }
    if(req.url === '/about'){
        res.end('This is a page about our history');
    }
    res.end(`<h1>Cant find page you are looking fo</h1>
    <a href="/">Back Home</a>`);
})

server.listen(4000);