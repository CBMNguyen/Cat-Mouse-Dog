function Mouse(name){
	this.name =  name;
	this.age =  1;
	this.weight = 1;
	this.color = "orange";
	this.stomach = [];
}
Mouse.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

module.exports = Mouse;