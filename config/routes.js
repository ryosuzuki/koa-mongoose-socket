
var posts = require('../app/controllers/posts')

module.exports = function (app) {

  // RESTful API for Socket.io
  app.io.route('req:posts:socket', posts.socket);

  // RESTful API
  app.get('/', posts.index);
  app.get('/posts/new', posts.new);
  app.get('/posts/:id', posts.show);
  app.get('/posts/:id/edit', posts.edit);
  app.post('/posts', posts.create);
}
