var express = require('express');
var app = express.createServer();
app.get('/', function(req, res) {
	res.send('Hello World');
});


app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view options', {layout: false});
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.staticProvider(__dirname + '/public'));
});

app.configure('production', function() {
	app.use(express.logger());
	app.use(express.errorHandler());
});

app.configure('development', function() {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/hello', function(req, res) {
	res.render('index.jade', {
		locals: {
			message: 'hello world #2'
		}
	});
});

app.listen(3000);