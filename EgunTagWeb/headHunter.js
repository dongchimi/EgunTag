var headHunter = function(){};

headHunter.getSaveEngineer = function() {
	return require('./engineers/saveEngineer');
};

headHunter.getDeleteByIdEngineer = function() {
	return require('./engineers/deleteByIdEngineer');
};

headHunter.getFindByNameEngineer = function() {
	return require('./engineers/findByNameEngineer');
};

headHunter.getFindByIdEngineer = function() {
	return require('./engineers/findByIdEngineer');
};

headHunter.getFindAllTagsEngineer = function() {
	return require('./engineers/findAllTagsEngineer');
};



module.exports = headHunter;