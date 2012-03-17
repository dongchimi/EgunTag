var headHunter = function(){};

headHunter.getFindAllTagsEngineer = function() {
	return require('./engineers/findAllTagsEngineer');
};

headHunter.getFindByIdEngineer = function() {
	return require('./engineers/findByIdEngineer');
};

module.exports = headHunter;