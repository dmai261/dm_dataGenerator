let fs = require('file-system');

// fs.readdir('./storage', (err, files) => {
//   for (var i = 1; i < files.length; i++) {
//     const path = __dirname + '/storage/' + files[i]
//     let file = fs.createReadStream(, );

//     file.on('data', function(chunk) {
//       console.log(chunk);
//     });
//   }
// });
let file = fs.createReadStream('./reviewData.csv');
var data = '';

file.on('data', function(chunk) {
  console.log(chunk.toString())
  data+=chunk;
});

file.on('end', function() {
  // console.log(data);
});

// echo kern.maxfiles=524288 | sudo tee -a /etc/sysctl.conf
// echo kern.maxfilesperproc=524288 | sudo tee -a /etc/sysctl.conf
// sudo sysctl -w kern.maxfiles=524288
// sudo sysctl -w kern.maxfilesperproc=524288
// ulimit -n 524288 