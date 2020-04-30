var chalk = require('chalk');
function Dog(name){
	this.name = name;
	age = 1;
	weight = 2;
	color = 'while';
	stomach = []; 
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}
Dog.prototype.sayHi = function(){
	console.log("Dog name is "+ chalk.green(this.name));
}
module.exports = Dog;