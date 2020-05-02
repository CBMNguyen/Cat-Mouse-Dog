var chalk = require('chalk');
var Dog = require('./dog.js');
var Cat = require('./cat.js');
var Horse = require('./horse');

var dog = new Dog('Cau Vang');
var cat = new Cat('tiny');
var horse = new Horse('Thien ma');
console.log('Dog cannot eat Horse')
try{
	dog.eat(horse);
}catch{
	console.log( chalk.green('Error:') + chalk.red(' Cannot eat Horse'));
}

console.log(dog);