var Engineer = require('./Engineer'),
      EgunTag = require('../models').EgunTag;

var findAllTagsEngineer = Engineer.tranning({name : "FindAllTags"});

findAllTagsEngineer.work = function(nextFunction) {
	this.workgingCount++;
	console.log("My name is " + this.name + "Engineer");

	EgunTag.find().run(function(err, docs){
		if(!err) console.log(docs);
		else console.log('err');
	});

	nextFunction();
};

module.exports = findAllTagsEngineer;