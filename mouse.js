function Mouse(){
	name =  "Cat";
	age =  1;
	weight = 1;
	color = "orange";
	stomach = [];
}
Mouse.prototype.eat = function(cat) {
	this.stomach.push(cat);
};