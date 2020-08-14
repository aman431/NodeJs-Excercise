var http = require('http'); 
var fs = require('fs');

//Creating a Server 
var server = http.createServer(function(req,res){
	if(req.url==='/home' || req.url==='/'){
		res.writeHead(200, {'Content-Type': 'text/html'}); //On Response WritingHead metioning the content-type 
		fs.createReadStream(__dirname + '/index.html','utf8').pipe(res); // Reading a file index.html
		//myReadStream.pipe(res); //connecting to Webpage
	}
	else if(req.url === '/contact-us'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
	}
	else if(req.url === '/api/Database'){
		//Json data
		var database = [
				{
					name: 'aman',
					age: '22',
					address: 'Abcd',
					school: 'Aps'
				},
				{
					name: 'Rahul',
					age: '28',
					address: 'CDBD',
					school: 'Aps'
				}
		];
		res.writeHead(200,{'Content-Type':'application/json'});
		res.end(JSON.stringify(database));
	}
	else{
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
	}
});

server.listen(3001,'localhost'); //Deploy on 3000 port 
console.log('Publishing a Page');
