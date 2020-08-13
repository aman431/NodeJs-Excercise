var http = require('http');

var server = http.createServer(function(req,res){ //Creating a server by using createServer
	console.log("request has made"+req.url); 
	res.writeHead(200,{'Content-Type':'text/plain'}); //Setting a Status 200 with content-type
	res.end('Hey aman you calling me !!'); //end by calling a message
});

server.listen(3000,'localhost'); //runing on localhost port 3000
console.log('Ready to run on port 3000');  


