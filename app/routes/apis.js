var headHunter = require('../headHunter');

var apis = function(){};

apis.save = function(req, res) {
	var names = req.params.names;
	var engineer = headHunter.getSaveEngineer();
	engineer.work(names, function() {
		res.end();
	});
};

apis.deleteById = function(req, res) {
	var id = req.params.id;
	var engineer = headHunter.getDeleteByIdEngineer();
	engineer.work( id, function() {
		res.end();
	});
};

apis.findByName = function(req, res) {
	var names = req.params.names;
	var engineer = headHunter.getFindByNameEngineer();
	engineer.work( names, function(){
		res.end();
	});
};

apis.findById = function(req, res) {
	var id = req.params.id;
	var engineer = headHunter.getFindByIdEngineer();
	engineer.work( id , function(){
		res.end();
	});
};

apis.findAllTags = function(req, res) {
	var engineer = headHunter.getFindAllTagsEngineer();
	engineer.work( function() {
		res.end();
	});
};

module.exports = apis;