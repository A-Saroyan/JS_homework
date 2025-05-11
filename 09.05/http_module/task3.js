const http = require("http")

http.createServer((req,res) => {

    if(req.url == '/submit' && req.method == "POST")
    {
        let body = "";

        req.on('data',chunk => {
            body += chunk.toString();
        })


        req.on('end',()=>{
            console.log("Recieved body => ",body);
            res.end("OK");
        });
 
    }

    else
    {
        res.statusCode = 404;
        res.end("not found");
    }
}).listen(3000,()=> {console.log("Listening port 3000")})