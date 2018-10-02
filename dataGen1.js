let faker = require('faker');
let fs = require('file-system');

productIdCounter = 1;
reviewsCounter = 0;

console.time();

let write = () => {
  let file = fs.createWriteStream('./datas.json', {flags:'a'});
  let ok = true;
  
  while (productIdCounter !== 100000) {
    const reviewObj = {
      productId: productIdCounter,
      productName: 'Rock ' + productIdCounter,
      reviewId: reviewsCounter,
      username: faker.internet.userName(),
      stars: Math.floor(Math.random() * 6),
      title: faker.lorem.sentence(),
      text: faker.lorem.sentence(),
      timestamp: faker.date.past(),
      numHelpful: Math.floor(Math.random() * 1000),
      verifiedPurchase: Math.random() < 0.5,
      imageUrl: faker.image.imageUrl(),
    };
  
    let data = JSON.stringify(reviewObj);

    if (ok) {
      ok = file.write(data);
    } else {
      return file.once('drain', ()=>{
        write();
      });
    }
    
    reviewsCounter += 1;
    if (reviewsCounter % 5 === 0) {
      productIdCounter += 1;
    }
  }
  if (productIdCounter % 100000) {
    file.end();
    console.timeEnd();
  }
};
write();
// console.timeEnd();


// productIdCounter = 1;
// reviewsCounter = 1;

// console.time();

// const write = () => {
//   let data = '';
  
//   for (var j = 1; j < 5; j++) {
//     const reviewObj = `
//       productId: ${productIdCounter},
//       productName: ${'Egg ' + productIdCounter},
//       reviewId: ${reviewsCounter},
//       username: ${faker.internet.userName()},
//       stars: ${Math.floor(Math.random() * 6)},
//       title: ${faker.lorem.sentence()},
//       text: ${faker.lorem.sentence()},
//       timestamp: ${faker.date.past()},
//       numHelpful: ${Math.floor(Math.random() * 1000)},
//       verifiedPurchase: ${Math.random() < 0.5},
//       imageUrl: ${faker.image.imageUrl()}
//     `;
//     reviewsCounter += 1;
//     data += reviewObj + '\n';
//   }
//   productIdCounter += 1;

//   if (productIdCounter !== 10000000) {
//     fs.appendFile(__dirname + '/reviews.json', data, 'utf8', (err)=>{
//       if (err) console.error(err);
//       write();
//     });
//   } else {
//     fs.appendFile(__dirname + '/reviews.json', data, 'utf8', (err)=>{
//       if (err) console.error(err);
//       console.log('done');
//       console.timeEnd();
//     });
//   }

// };
// write();