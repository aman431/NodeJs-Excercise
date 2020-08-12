const counter = function(arr){
	return 'The length of array is '+arr.length+' ';
}
const add = function(a,b){
	return `The Sum of two number is ${a+b}`;
}
const sub = function(a,b){
	return `The Substraction of two number is ${a-b}`;
}
//Defining a PI
var pi = 3.142;
module.exports.counter = counter;
module.exports.add = add;
module.exports.sub = sub;
module.exports.pi = pi;
