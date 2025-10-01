const http = require("http");

const server = http.createServer( function(req, res){
    console.log("I got an incoming request");
   // console.log(req.headers);
    res.writeHead(201);
    res.end("Successfully got the request");

    switch(req.url){
        case "/":
             res.writeHead(201);
            res.end("Home page");
            break;
        case "/about":
             res.writeHead(201);
            res.end("About page");
            break;
        case "/contact":
             res.writeHead(201);
            res.end("Contact raj.ash2493@gmail.com");
            break;
        default:
             res.writeHead(201);
            res.end("404 page");
    }
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
})