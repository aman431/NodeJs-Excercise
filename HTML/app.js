var http = require('http'); 
var fs = require('fs');

//Creating a Server 
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'}); //On Response WritingHead metioning the content-type 
	var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8'); // Reading a file index.html
	myReadStream.pipe(res); //connecting to Webpage
});

server.listen(3000,'localhost'); //Deploy on 3000 port 
console.log('Publishing a Page');
