const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let cnt = 0;
let N = 0;
let arr = [];

rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    N = Number(x);
  } else {
    arr.push(x.split(' ').map(Number));
    if (N === cnt - 1) {
      rl.close();
    }
  }
}).on('close', function () {
  let output = [];
  let temp = [];
  let pointer = 0;
  arr.map((item) => {
    if (item[0] === 1) temp.push(item[1]);
    else if (item[0] === 2) pointer >= temp.length ? null : (pointer += 1);
    else if (item[0] === 3) temp[pointer] ? console.log(temp[pointer]) : console.log(-1);
    else if (item[0] === 4) console.log(temp.length - pointer);
  });
  //   console.log(output.join('\n'));
  process.exit();
});
