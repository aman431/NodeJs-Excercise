var events = require('events'); //Calling a Event Libraries
var util = require('util')
// Constructor
var Person = function(name){
	this.name = name;
};

//Inherting a Person with EventEmitter in util
util.inherits(Person, events.EventEmitter);
var aman = new Person('aman');
var rahul = new Person('rahul');
var abhishek = new Person('abhishek');
var people = [aman,rahul,abhishek]; //Array of constructor 

//Looping on each element of array
people.forEach(function(person){
	//console.log(person);
	//Event on each person 
	person.on('speak', function(mssg){
		console.log(person.name+ ' said: ' +mssg);
	});
});

//Calling a Object and executing a event
aman.emit('speak','hey dudes');
aman.emit('speak','hey how are you');

rahul.emit('speak','I am Fine');
rahul.emit('speak','How are you');





