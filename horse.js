var chalk = require('chalk');
function Horse(name){
	this.name = name;
	this.age = 1;
	this.weight = 50;
}

Horse.prototype.run = function() {
	console.log(chalk.blue(this.name) + ' run and shout: ' + chalk.red('hi hi hi @@'));
};
Horse.eat = function() {
	console.log('vegetable');
	console.log('leaf');
};
module.exports = Horse;