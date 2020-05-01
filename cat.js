function Cat(name){
	this.name = name
	this.age =  1;
	this.weight = 1;
	this.color = "orange";
	this.stomach = [];
}
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	return this;
};

module.exports = Cat;