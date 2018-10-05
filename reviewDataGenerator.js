let fs = require('file-system');
let fakerData = require('./fakerData.js');
let productIdCounter = 1;
let reviewIdCounter = 0;
console.time();

const headers = 'productid,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl\n';
fs.writeFileSync(__dirname + '/reviewData.csv', headers, (err) => {
  if (err) console.log(err);
});

let reviewShape;
const write = () => {
  reviewShape = '';
  for (var j = 0; j < 10000; j++) {
    for (var k = 0; k < 5; k++) {
      reviewShape += `${productIdCounter},${reviewIdCounter},${fakerData.userName[Math.floor(Math.random()*20)]},${Math.floor(Math.random()*6)},${fakerData.sentences[Math.floor(Math.random()*20)]},${fakerData.sentences[Math.floor(Math.random()*20)]},${fakerData.timestamp[Math.floor(Math.random()*20)]},${Math.floor(Math.random()*1000)},${Math.random()<0.5},${fakerData.imageUrl[Math.floor(Math.random()*20)]}\n`;
      reviewIdCounter++;
    }
    productIdCounter++;
  }
  
  if (productIdCounter === 10000001) {
    fs.appendFileSync(__dirname + '/reviewData.csv', reviewShape, 'utf8', (err)=>{
      if (err) console.error(err);
    });
    console.timeEnd();
    return;
  } else {
    fs.appendFileSync(__dirname + '/reviewData.csv', reviewShape, 'utf8', (err)=>{
      if (err) console.error(err);
    });
    write();
    return;
  }
};
write();