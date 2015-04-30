
var Post = require('../models/post.js');
var parse = require('co-body');


exports.index = function *() {
  var posts = yield Post.find().exec();
  this.body = yield this.render('posts/index', {
    title: 'Posts',
    posts: posts
  });
}

exports.new = function *() {
  this.body = yield this.render('posts/new', {
    title: 'New Post',
    post: new Post({})
  });
};

exports.show = function *() {
  var id = this.params.id;
  var post = yield Post.findOne({ _id: id }).exec();
  this.body = yield this.render('posts/show', {
    title: 'Post',
    post: post
  });
}

exports.edit = function *() {
  var id = this.params.id;
  var post = yield Post.findOne({ _id: id }).exec();
  this.body = yield this.render('posts/edit', {
    title: 'Edit Post',
    post: post
  });
};

exports.create = function *() {
  var body = yield parse(this);
  var post = new Post(body);
  yield post.save()
  this.redirect('/posts/'+post._id);
};

exports.update = function *() {
  var body = yield parse(this);
  var post = yield Post.findOne(body._id).exec();
  yield post.update(body);
  this.redirect('/posts/'+post._id);
};

exports.socket = function *() {
  var data = this.data[0];
  var post = new Problem(data)
  yield post.save();
  this.emit('res:post:create', post);
}

