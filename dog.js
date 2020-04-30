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