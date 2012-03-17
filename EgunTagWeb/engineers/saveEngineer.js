var Engineer = require('./Engineer'),
	egunUtil = require('../egunUtil'),
      EgunTag = require('../models').EgunTag;

var saveEngineer = Engineer.tranning({name : "SaveEngineer"});

saveEngineer.work = function(names, next) {
	if( egunUtil.StringUtil.isEmpty(names) ) res.end();
	names = names.split(',');

	EgunTag.where('name').in(names).run(
			function(err, docs){
				if(!err) {
					var paramLength = names.length;
					for(var idx = 0; idx < paramLength; idx++) {
						var tagName = names[idx].trim();

						if(existName(docs, tagName)) continue;

						var eguntag = new EgunTag({name: tagName});
						eguntag.save(function(err) {
							if(!err) console.log('Success!');
							else console.log('Error');
							next();
						});
					}
				}
				else {
					console.log('err');
					next();
				}
			});
};

var existName = function(docs, name) {
	if(egunUtil.ArrayUtil.isEmpty(docs)) return false;

	var found = false;
	var docLength = docs.length;
	for(var idx = 0; idx < docLength; idx++) {
		var doc = docs[idx];

		if(doc.name != name) continue;

		found = true;
	}
	return found;
}


module.exports = saveEngineer;