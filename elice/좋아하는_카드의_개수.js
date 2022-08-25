const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let cnt = 0;
let N, M;
let input = [];
let K;
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    [N, M] = x.split(' ').map(Number);
  } else {
    if (cnt === N + 2) {
      K = Number(x);
      rl.close();
    } else {
      input.push(x.split(' ').map(Number));
    }
  }
}).on('close', function () {
  console.log(input.reduce((acc, cur) => cur.filter((el) => el === K).length + acc, 0));
  process.exit();
});
