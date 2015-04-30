var fs = require('fs');
var path = require('path');
var http = require('http');
var koa = require('koa.io'); // require('koa');
var mongoose = require('mongoose');

var app = koa();
var server = http.createServer(app.callback());
var port = process.env.PORT || 3000;

var mongo = {
  db: 'mongodb://localhost/sample',
  options: {}
};
mongoose.connect(mongo.db, mongo.options);

require('./config/koa')(app);
require('./config/routes')(app);
require('./config/socket')(app);

console.log('Express app started on port ' + port);

app.listen(port);
module.exports = app;
