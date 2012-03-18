var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/eguntag');

var Tag = new Schema ({
	name : {type: String},
	date : {type: Date, default: Date.now},
	usingCount : {type: Number, default: 1}
});

var models = {
	EgunTag : mongoose.model('EgunTag', Tag)
};

module.exports = models;