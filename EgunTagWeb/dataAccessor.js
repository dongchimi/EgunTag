var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eguntag');



EgunTag.path('tagName').set(function(v)) {
	return capitalize(v);
});


module.exports = dataAccessor;