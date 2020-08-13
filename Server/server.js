var http = require('http');
//console.log(http);
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'}); //Setting a Status 200 with content-type
	res.end('Hey aman you calling me !!'); //end by calling a message
});

server.listen(3000,'localhost'); //runing on localhost port 3000
console.log('Ready to run on port 3000');  


