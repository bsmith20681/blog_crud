const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }, {
    collection: 'posts'
  })

module.exports = mongoose.model('Post', postSchema)
