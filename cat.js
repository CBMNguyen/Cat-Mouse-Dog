function Cat(){
	name =  "Cat";
	age =  1;
	weight = 1;
	color = "orange";
	stomach = [];
}
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};