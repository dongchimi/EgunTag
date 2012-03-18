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

<<<<<<< HEAD
						var foundDoc = findDocByName(docs, tagName);
						// 업데이트
						if(foundDoc != null) {
							var usingCount = foundDoc.usingCount;
							usingCount++;
							EgunTag.update({_id: foundDoc._id}, {usingCount: usingCount}, function(err){
								if(!err) {
									console.log('update success');
								}
								else {
									console.log('update err');
								}
								next();
							});
						}
						// 새로입력
=======
						if(existName(docs, tagName)) {
							// TODO update
							continue;
						}
>>>>>>> 80e96bd8291f66a90c98f557f3f2aa3015957699
						else {
							var eguntag = new EgunTag({name: tagName});
							eguntag.save(function(err) {
								if(!err) console.log('Success!');
								else console.log('Error');
								next();
							});
						}
					}
				}
				else {
					console.log('err');
					next();
				}
			});
};

var findDocByName = function(docs, name) {
	if(egunUtil.ArrayUtil.isEmpty(docs)) return null;

	var foundDoc = null;
	var docLength = docs.length;
	for(var idx = 0; idx < docLength; idx++) {
		var doc = docs[idx];

		if(doc.name != name) continue;

		foundDoc = doc;
		break;
	}
	return foundDoc;
}

var existName = function(docs, name) {
	var foundDoc = findDocByName(docs, name);
	return foundDoc != null;
}


module.exports = saveEngineer;