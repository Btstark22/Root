//requiring npm module http
const http = require('http');

//creating a PORT number
const PORT = 8080;

//creating a function that handles requests and responses
function handleRequest(req, res) {
    res.end("Path hit. It works." + req.url)
}

//creates the server using the http method createServer and passes it one argument which is a function called handleRequest
const server = http.createServer(handleRequest);

//makes the server listen and passses the listen mothed two arguments. One is the POrt number and two is the a callback function that logs to the console a string followed by the PORT number.
server.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});