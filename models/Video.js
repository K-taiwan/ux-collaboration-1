const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: String,
  description: String,
})

const Video = mongoose.model('video', videoSchema);

module.exports = Video;