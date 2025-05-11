const http = require("http")
const fs = require("fs")


http.createServer((req,res) => {

    if(req.url == "/home")
    {
        let file = fs.readFileSync("index.html");
        res.writeHead(200,{ 'content-type':'text/html'})
        res.end(file);
    }
}).listen(3000,()=> {console.log("Listening port 3000")})