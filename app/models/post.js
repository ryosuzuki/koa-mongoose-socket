
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String},
  content: {type: String},
  createdAt: {type: Date, default: Date.now}
});

module.exports = exports = mongoose.model('Post', PostSchema);

