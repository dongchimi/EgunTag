var Engineer = require('./Engineer'),
	egunUtil = require('../egunUtil'),
      EgunTag = require('../models').EgunTag;

var deleteByIdEngineer = Engineer.tranning({name : "deleteByIdEngineer"});

deleteByIdEngineer.work = function(id, next) {
	
	EgunTag.findById(id, function(err, doc) {
		if(!err) {
			doc.remove();
		}
		else console.log('err');

		next();
	});
};

module.exports = deleteByIdEngineer;