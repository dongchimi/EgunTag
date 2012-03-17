var Engineer = require('./Engineer'),
	egunUtil = require('../egunUtil'),
      EgunTag = require('../models').EgunTag;

var findByIdEngineer = Engineer.tranning({name : "FindByIdEngineer"});

findByIdEngineer.work = function(id, next) {
	if( egunUtil.StringUtil.isEmpty(id) ) next();

	EgunTag.findById(id, function(err, doc) {
		if(!err) console.log(doc);
		else console.log('err');

		next();
	});
};

module.exports = findByIdEngineer;