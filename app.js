/*
 * Module dependencies.
 */
var express = require('express');

// Configuration

var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view options', { pretty: true });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.listen(4000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

