var Engineer = require('./Engineer'),
	egunUtil = require('../egunUtil'),
      EgunTag = require('../models').EgunTag;

var findByNameEngineer = Engineer.tranning({name : "findByNameEngineer"});

findByNameEngineer.work = function(names, next) {
	if( egunUtil.StringUtil.isEmpty(names) ) res.end();

	names = names.split(',');
	EgunTag.where('name').in(names).run(function(err, docs){
		if(!err) console.log(docs);
		else console.log('err');

		next();
	});
};

module.exports = findByNameEngineer;