let faker = require('faker');
let fs = require('file-system');
let fakerData = require('./fakerData.js');

productIdCounter = 1;
reviewsCounter = 0;

console.time();

const headers = 'productId,productName,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl\n';
fs.writeFileSync(__dirname + '/reviews.csv', headers, (err) => {
  if (err) console.log(err);
});

const write = () => {
  console.log(productIdCounter);
  let data = '';
  // data = '';
  let loops = 0;

  for (var j = 0; j < 100000; j++) {
    for (var k = 0; k < 5; k++) {
      // const reviewObj = `${productIdCounter}, ${'Egg ' + productIdCounter}, ${reviewsCounter}, ${fakerData.userName[Math.floor(Math.random() * 20)]}, ${Math.floor(Math.random() * 6)}, ${fakerData.sentences[Math.floor(Math.random() * 20)]}, ${fakerData.sentences[Math.floor(Math.random() * 20)]}, ${fakerData.timestamp[Math.floor(Math.random() * 20)]}, ${Math.floor(Math.random() * 1000)}, ${Math.random() < 0.5}, ${fakerData.imageUrl[Math.floor(Math.random() * 20)]}`;
      reviewsCounter += 1;
      data += `${productIdCounter},${'Egg ' + productIdCounter},${reviewsCounter},${fakerData.userName[Math.floor(Math.random()*20)]},${Math.floor(Math.random()*6)},${fakerData.sentences[Math.floor(Math.random()*20)]},${fakerData.sentences[Math.floor(Math.random()*20)]},${fakerData.timestamp[Math.floor(Math.random()*20)]},${Math.floor(Math.random()*1000)},${Math.random()<0.5},${fakerData.imageUrl[Math.floor(Math.random()*20)]}\n`;
    }
    productIdCounter += 1;
  }
  
  if (productIdCounter === 10000001) {
    fs.appendFileSync(__dirname + '/reviews.csv', data, 'utf8', (err)=>{
      if (err) console.error(err);
    });
    console.timeEnd();
    return;
  } else {
    fs.appendFileSync(__dirname + '/reviews.csv', data, 'utf8', (err)=>{
      if (err) console.error(err);
      // console.log('lol');
    });
    write();
    return;
  }
};
write();