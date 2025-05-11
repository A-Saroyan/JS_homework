const http = require("http")

http.createServer((req,res) => {
    if(req.url == '/about')
    {
        res.end("About page !!!");
    }

    else if (req.url == '/')
    {
        res.end("Main PAge !!!");
    }
}).listen(3000,()=> {console.log("Listening port 3000")})