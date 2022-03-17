const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("This is the home page");
    }
    if(req.url == '/about'){
        res.end("Welcome to Webclash");
    }
    res.end(`<h1>Oops</h1>
    <p>That page does not exist</p>
    <a href="/">Back to homepage</a>`);
})
server.listen(5000);