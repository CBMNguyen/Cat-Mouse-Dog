function Horse(name){
	this.name = name;
	this.age = 1;
	this.weight = 50;
}

Horse.prototype.run = function() {
	console.log('Horse run and shout: '+chalk.red('hi hi hi @@'));
};