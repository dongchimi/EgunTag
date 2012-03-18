var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/eguntag');

var Tag = new Schema ({
	name : {type: String},
	date : {type: Date, default: Date.now},
<<<<<<< HEAD
	usingCount : {type: Number, default: 1}
=======
	usingCount : {type: Number, default: 0}
>>>>>>> 80e96bd8291f66a90c98f557f3f2aa3015957699
});

var models = {
	EgunTag : mongoose.model('EgunTag', Tag)
};

module.exports = models;