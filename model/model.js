const mongoose = require('mongoose');

const cardTag = new mongoose.Schema({
  title: String,
});

const card = new mongoose.Schema({
  id: String,
  title: String,
  note: String,
  pin: Boolean,
  cardTags: [cardTag],
});

const tag = new mongoose.Schema({
  title: String,
});

const schema = new mongoose.Schema({
  id: String,
  cards: [card],
  tags: [tag],
});

module.exports = mongoose.model('collection', schema);

// {
//     "id": "1"
//     "cards": [
//         {
//             "id": "1",
//             "title": "Hello",
//             "note": "Hello, my name is Yash.",
//             "pinned": false,
//             "cardTags": [
//                 {
//                     "id": "111",
//                     "title": "new"
//                 }
//             ]
//         }
//     ],
//     "tags": [
//         {
//             "id": "11",
//             "title": "new"
//         }
//     ]
// }
