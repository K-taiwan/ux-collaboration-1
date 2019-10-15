const mongoose = require('mongoose');
const DB_URI = process.envMONGODB_URI || 'mongodb://localhost:27017/hillary-duff';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('HILLARY DUFF DATABASE IS LIVE'))
  .catch((err) => console.log(err));

  module.exports = {
    Contact: require('./Contact'),
    Photo: require('./Photo'),
    Video: require('./Video'),
  };