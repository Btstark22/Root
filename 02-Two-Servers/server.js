// requires http npm module 
const http = require('http');

// creates two port numbers
const PORT1 = 7000;
const PORT2 = 7500;

// creates array of quotes in string form
const array = ["The lion pays no mind to the sheep", "Mother Nature cares not for a single lion"];
// creates a function that randomizes the array and handles the request using http method res.end()
function func1(req, res) {
    const rand = Math.floor(Math.random()*array.length)
    res.end(array[rand], array[rand]);
}

//creates second function with hard coded string to page
function func2(req, res) {
    res.end("Mother Nature cares not for a single lion" + req.url);
}

//creates two different servers and passes a function as the only argument for both
const server1 = http.createServer(func1);
const server2 = http.createServer(func2);

// both servers are listening on difffernt port numbers.
server1.listen(PORT1, function () {
    console.log("Server 1 is working: " + PORT1)
})
server2.listen(PORT2, function () {
    console.log("Server 2 is working: " + PORT2)
})
