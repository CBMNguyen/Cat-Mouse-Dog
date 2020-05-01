var chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.age = 1;
	this.weight = 2;
	this.color = 'while';
	this.stomach = []; 
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
	return this;
}
Dog.prototype.sayHi = function(){
	console.log("Dog name is "+ chalk.green(this.name));
}
module.exports = Dog;