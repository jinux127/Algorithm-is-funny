// 미해결
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let cnt = 0;
let arr = [];
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    N = Number(x);
  } else {
    arr = x.split(' ').map(Number);
    rl.close();
  }
}).on('close', function () {
  const visited = new Array(N).fill(false);
  let pointer = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(pointer);
    result.push(pointer + 1);
    visited[pointer] = true;
    console.log(visited);
    let skipCount = arr[i];

    while (skipCount) {
      if (!visited[pointer]) {
        skipCount -= 1;
      }
      pointer += 1;
      if (pointer >= N) pointer = 0;
      console.log(skipCount, pointer);
    }
    // if(visited.filter(item=>item).length === N) break;
  }
  console.log(result);
  process.exit();
});
