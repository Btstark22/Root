const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleReq(req, res) {
  const path = req.url;

  switch (path) {
    case "/":
      return fs.readFile(__dirname + "/views/home.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/cats":
      return fs.readFile(__dirname + "/views/cats.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/birds":
      return fs.readFile(__dirname + "/views/birds.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/mice":
      return fs.readFile(__dirname + "/views/mice.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/vagabond":
      return fs.readFile(__dirname + "/views/vagabond.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  }
}

const server = http.createServer(handleReq);

server.listen(PORT, function () {
  console.log("Path Hit!   :   http://localhost:8080");
});
