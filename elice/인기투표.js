const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
const arr = [];
let cnt = 0;
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    N = Number(x);
  } else {
    arr.push(x);
    if (cnt === N + 1) {
      rl.close();
    }
  }
}).on('close', function () {
  const obj = {};

  arr.map((item) => {
    obj[item] ? (obj[item] += 1) : (obj[item] = 1);
  });

  const result = { key: '', count: 0 };

  Object.keys(obj).map((key) => {
    if (result.count < obj[key]) {
      result.key = key;
      result.count = obj[key];
    }
  });
  console.log(result.key);
  process.exit();
});
