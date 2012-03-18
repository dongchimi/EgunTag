var headHunter = require('../headHunter'),
	apis = require('./apis');

// to render
exports.index = function(req, res){
 	res.render('index', { title: 'Express' })
};

exports.tags = function(req, res) {
	var engineer = headHunter.getFindAllTagsEngineer();
	engineer.work( function(foundDocs) {
		res.render('tags', {'foundDocs' :foundDocs});
	});
};

// to apis
exports.apis = apis;
