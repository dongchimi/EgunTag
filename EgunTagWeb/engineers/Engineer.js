var Engineer = function() {
	// 이름
	this.name = "Egnineer";
	// 일 한 횟수
	this.workingCount = 0;
};

Engineer.prototype.work = function() {
	throw Error("i can't work. give skill!!");
};

Engineer.tranning = function(engineer) {
	engineer.constructor = Engineer;
	engineer.prototype = new Engineer();
	
	return engineer;
}

module.exports = Engineer;