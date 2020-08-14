var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
	//res.sendFile(__dirname + '/index.html');
	res.render('index');
});
app.get('/contact',(req,res) =>{
	//res.sendFile(__dirname + '/contact.html');
	res.render('contact');
});
app.get('/profile/:name',(req,res) =>{
	var data = {age: 29, job: 'Developer', hobbies:['football','Dance','Sing']};
	res.render('profile',{person: req.params.name, data: data});
});
app.listen(3000);


/*var http = require('http'); 
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
*/
