const mongoose = require('mongoose');

const card = new mongoose.Schema({
  id: String,
  title: String,
  note: String,
  pin: Boolean,
  cardTags: [String],
});

const schema = new mongoose.Schema({
  id: String,
  cards: [card],
  tags: [String],
});

module.exports = mongoose.model('collection', schema);
