let faker = require('faker');
const userName = [];
const sentences = [];
const timestamp = [];
const imageUrl = [];

for (var i = 0; i < 20; i++) {
  userName.push(faker.internet.userName());
  sentences.push(faker.lorem.sentence());
  timestamp.push(faker.date.past());
  imageUrl.push(faker.image.imageUrl());
}

module.exports = {
  userName: userName,
  sentences: sentences,
  timestamp: timestamp,
  imageUrl: imageUrl
};