const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, Q;
let cnt = 0;
let arr;
const Q_arr = [];
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    [N, Q] = x.split(' ').map(Number);
  } else {
    if (cnt === 2) arr = x.split(' ').map(Number);
    else {
      Q_arr.push(x.split(' ').map(Number));
    }

    if (Q_arr.length === Q) rl.close();
  }
}).on('close', function () {
  Q_arr.map((item) => {
    [type, k] = item;
    if (type === 2) {
      for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
      }
    } else if (type === 1) {
      arr.reverse();
    }
  });
  console.log(arr.join(' '));
  process.exit();
});
