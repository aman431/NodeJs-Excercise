var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs'); //views ejs
app.use('/assets',express.static('style')); //Middleware

app.get('/',(req,res)=>{
	//res.sendFile(__dirname + '/index.html');
	res.render('index'); //rendering all ejs file 
});

app.get('/contact',function(req,res){
	//res.sendFile(__dirname + '/contact.html');
	//console.log(req.query);//return the data in object from the requesting url 
	res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
	console.log(req.body);
	//res.sendFile(__dirname + '/contact.html');
	//console.log(req.query);//return the data in object from the requesting url 
	res.render('contact-success', {data: req.body});
});

app.get('/profile/:name',(req,res) =>{
	var data = {age: 29, job: 'Developer', hobbies:['football','Dance','Sing']};
	res.render('profile',{person: req.params.name, data: data});
});
app.listen(3000);
