const http = require("http")


http.createServer((req,res)=> {

    if(req.url == '/')
    {
        res.end("Home Page !!!")
    }

    else 
    {
        res.statusCode = 404;
        res.end("Unknown Page !!!!")
    }
}).listen(3000,()=> {console.log("Listening port 3000")})