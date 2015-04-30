
var serve = require('koa-static');
var router = require('koa-router');
var views = require('co-views');
var session = require('koa-session');
var logger = require('koa-logger');
var responseTime = require('koa-response-time');
var staticCache = require('koa-static-cache');
var compress = require('koa-compress');
var less = require('koa-less');

var swig = require('swig');

module.exports = function (app) {

  app.use(responseTime());

  app.use(compress());
  app.use(less('./app/assets'));
  app.use(serve('./bower_components'));
  app.use(serve('./app/assets'));

  // app.use(staticCache('../public', {
  //   maxAge: 365 * 24 * 60 * 60
  // }));

  app.keys = ['session']
  app.use(session(app));
  app.use(logger());
  app.use( function *(next) {
    this.render = views('./app/views', {
      map: { html: 'swig' },
      locals: this.locals
    });
    yield next;
  });

  app.use(router(app));

}
