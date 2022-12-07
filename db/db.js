const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const db = (DB) => {
  return mongoose.connect(DB);
};

module.exports = db;
