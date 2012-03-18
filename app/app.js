var express = require('express'),
 	routes = require('./routes'),
 	egunUtil = require('./egunUtil'),
 	models = require('./models'),
 	headHunter = require('./headHunter');

var EgunTag = models.EgunTag;

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  	app.set('views', __dirname + '/views');
  	app.set('view engine', 'jade');
  	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
  	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  	app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/tags', routes.tags);

app.get('/save/:names', function(req, res) {
	var names = req.params.names;
	var engineer = headHunter.getSaveEngineer();
	engineer.work(names, function() {
		res.end();
	});
});

app.get('/deleteById/:id', function(req, res) {
	var id = req.params.id;
	var engineer = headHunter.getDeleteByIdEngineer();
	engineer.work( id, function() {
		res.end();
	});
});

app.get('/findByName/:names', function(req, res) {
	var names = req.params.names;
	var engineer = headHunter.getFindByNameEngineer();
	engineer.work( names, function(){
		res.end();
	});
});

app.get('/findById/:id', function(req, res) {
	var id = req.params.id;
	var engineer = headHunter.getFindByIdEngineer();
	engineer.work( id , function(){
		res.end();
	});
});

app.get('/findAllTags', function(req, res) {
	var engineer = headHunter.getFindAllTagsEngineer();
	engineer.work( function() {
		res.end();
	});
});

// TODO dongchimi 필요하면 구현!
// app.get('/update', function(req, res) {
// 	console.log('update');
// 	res.end();
// });

app.listen(9003);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
