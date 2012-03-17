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

app.get('/save/:names', function(req, res) {
	var names = req.params.names;
	if( egunUtil.StringUtil.isEmpty(names) ) res.end();

	names = names.split(',');
	console.log('params : ' + names);

	EgunTag.where('name').in(names).run(function(err, docs){
		if(!err) {
			var paramLength = names.length;
			for(var idx = 0; idx < paramLength; idx++) {
				var tagName = names[idx].trim();

				if(hasName(docs, tagName)) continue;

				var eguntag = new EgunTag({name: tagName});

				console.log(JSON.stringify(eguntag));

				eguntag.save(function(err) {
					if(!err) console.log('Success!');
					else console.log('Error');
				});
			}
		}
		else console.log('err');

		res.end();
	});
});

var hasName = function(docs, name) {
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

app.get('/update', function(req, res) {
	console.log('update');
	res.end();
});

app.get('/deleteById/:id', function(req, res) {
	console.log('delete');
	res.end();
});

app.get('/findByName/:names', function(req, res) {
	var names = req.params.names;
	if( egunUtil.StringUtil.isEmpty(names) ) res.end();

	names = names.split(',');

	EgunTag.where('name').in(names).run(function(err, docs){
		if(!err) console.log(docs);
		else console.log('err');
	});
	
	res.end();
});

app.get('/findById/:id', function(req, res) {
	var engineer = headHunter.getFindByIdEngineer();
	engineer.work( req.params.id, function(){
		res.end();
	});
});

app.get('/findAllTags', function(req, res) {
	var engineer = headHunter.getFindAllTagsEngineer();
	engineer.work(function() {
		res.end();
	});
});

app.listen(9003);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
