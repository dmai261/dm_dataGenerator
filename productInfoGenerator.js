let fs = require('file-system');
let productIdCounter = 1;
console.time();

const headers = 'productId,productName\n';
fs.writeFileSync(__dirname + '/productData.csv', headers, (err) => {
  if (err) console.log(err);
});

const write = () => {
  let data = '';

  for (var j = 0; j < 10; j++) {
    console.log({productIdCounter});
    for (var k = 0; k < 100000; k++) {
      data += `${productIdCounter},${'Egg ' + productIdCounter}\n`;
      productIdCounter++;
    }
  }
  
  if (productIdCounter === 10000001) {
    fs.appendFileSync(__dirname + '/productData.csv', data, 'utf8', (err)=>{
      if (err) console.error(err);
    });
    console.timeEnd();
    return;
  } else {
    fs.appendFileSync(__dirname + '/productData.csv', data, 'utf8', (err)=>{
      if (err) console.error(err);
    });
    write();
    return;
  }
};
write();