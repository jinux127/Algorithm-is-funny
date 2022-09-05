const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N, K;
let cnt = 0;
let arr = [];
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    [N, K] = x.split(' ').map(Number);
  } else {
    arr = x.split(' ').map(Number);
    rl.close();
  }
}).on('close', function () {
  console.log(Math.floor((N - 1) / (K - 1) + 1));

  process.exit();
});
