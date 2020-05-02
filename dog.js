var chalk = require('chalk');
var Horse = require('./horse');
function Dog(name){
	this.name = name;
	this.age = 1;
	this.weight = 2;
	this.color = 'while';
	this.stomach = []; 
}

Dog.prototype.eat = function(animal){
	if(animal instanceof Horse){
		throw new Error("Error: " + chalk.red('Dog cannot eat Horse.'));
	}else{
		this.stomach.push(animal);
	}
}
Dog.prototype.sayHi = function(){
	console.log("Dog name is "+ chalk.green(this.name));
}
module.exports = Dog;