const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
const countDiv = (n) => {
  let cnt = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) cnt += 1;
    else if (n % i === 0) cnt += 2;
  }
  return cnt;
};
rl.on('line', function (x) {
  N = Number(x);
  rl.close();
}).on('close', function () {
  let max = 0;
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    let aaa = countDiv(i);
    if (aaa >= max) {
      max = aaa;
      answer = i;
    }
    max = Math.max(countDiv(i), max);
  }
  console.log(answer);
  process.exit();
});
