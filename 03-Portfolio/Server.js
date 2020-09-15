const http = require('http');

const PORT = 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server is listening on PORT : " + PORT)
})

function handleRequest(req, res) {

     const path = req.url

    switch (path) {
        case "/":
            return displayRoot(res);

        case "/portfolio":
            return displayPortfolio(res);
        
        default:
            return display404(path, res);

    }
}

function displayRoot(res) {
    const myHTML = "<html>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end(myHTML);
}

function displayPortfolio (res) {
    const myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end(myHTML);
}

function display404 (url, res) {
    const myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}