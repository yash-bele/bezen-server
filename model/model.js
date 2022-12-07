const mongoose = require('mongoose');

const cardTag = new mongoose.Schema({
  id: String,
  title: String,
});

const card = new mongoose.Schema({
  id: String,
  title: String,
  note: String,
  cardTags: [cardTag],
});

const tag = new mongoose.Schema({
  id: String,
  title: String,
});

const schema = new mongoose.Schema({
  id: {
    type: String,
    default: '1',
  },
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
