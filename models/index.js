const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/hillary-duff';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('HILLARY DUFF DATABASE IS LIVE'))
  .catch((err) => console.log(err));

  module.exports = {
    Subscriber: require('./Subscriber'),
    Photo: require('./Photo'),
    Video: require('./Video'),
  };