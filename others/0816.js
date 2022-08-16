const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const obj = {
  0: [`-###-`, `-#-#-`, `-#-#-`, `-#-#-`, `-###-`],
  1: [`--#--`, `--#--`, `--#--`, `--#--`, `--#--`],
  2: [`-###-`, `---#-`, `-###-`, `-#---`, `-###-`],
  3: [`-###-`, `---#-`, `-###-`, `---#-`, `-###-`],
  4: [`-#-#-`, `-#-#-`, `-###-`, `---#-`, `---#-`],
  5: [`-###-`, `-#---`, `-###-`, `---#-`, `-###-`],
  6: [`-###-`, `-#---`, `-###-`, `-#-#-`, `-###-`],
  7: [`-###-`, `-#-#-`, `-#-#-`, `---#-`, `---#-`],
  8: [`-###-`, `-#-#-`, `-###-`, `-#-#-`, `-###-`],
  9: [`-###-`, `-#-#-`, `-###-`, `---#-`, `-###-`],
};
rl.on('line', function (x) {
  input.push(...String(x).split(''));
  rl.close();
}).on('close', function () {
  let result = Array.from(new Array(5), () => new Array());
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 5; j++) {
      result[j].push(obj[input[i]][j]);
    }
  }
  result.map((item) => console.log(item.join('')));
  process.exit();
});

//전광판

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let cnt = 0;
const input = [];
let N = 0;
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 1) {
    N = Number(x) * 2;
  } else {
    N -= 1;
    input.push(x);
    if (N === 0) {
      rl.close();
    }
  }
}).on('close', function () {
  const result = [];
  const arr = input.filter((item, i) => i % 2 !== 0).map((item) => item.split(' ').map(Number));

  for (let i = 0; i < arr.length; i++) {
    const mountain = arr[i];

    const topIndex = mountain.indexOf(Math.max(...mountain));
    let left = 0;
    let right = mountain.length - 1;
    let isMountain = true;

    // console.log(left !== topIndex && right !== topIndex);
    // console.log('mountain[left]',mountain[left]);
    while (left !== topIndex || right !== topIndex) {
      // console.log('mountain[left]',mountain[left]);
      if (left !== topIndex) {
        if (mountain[left] > mountain[left + 1]) {
          isMountain = false;
          break;
        }
        left += 1;
      }
      if (right !== topIndex) {
        if (mountain[right] > mountain[right - 1]) {
          isMountain = false;
          break;
        }
        right -= 1;
      }
    }
    isMountain ? console.log('Yes') : console.log('No');
  }

  // console.log(result.join('\n'))
  process.exit();
});

//산

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let cnt = 0;
let n = 0;
rl.on('line', function (x) {
  if (cnt === 0) {
    input.push(x.split(' ').map(Number));
    n = input[0][0];
    cnt += 1;
  } else {
    n -= 1;
    input.push(x.split(' ').map(Number));
    if (n === 0) {
      rl.close();
    }
  }
}).on('close', function () {
  const [N, K] = input.shift();
  const graph = [...input];
  const visited = new Array(N).fill(false);

  const dfs = (v) => {
    visited[v] = true;

    for (let i = 0; i < 2; i++) {
      if (!visited[graph[v][i] - 1]) dfs(graph[v][i] - 1);
    }
  };

  dfs(K - 1);

  console.log(visited.filter((item) => !item).length);

  process.exit();
});

//화살표

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 사람수 k
// 숫자 n
// 타겟 숫자 p
// 플레이어는 원하는 만큼 회전 시킬 수 있음
// 처음 화살표 1
const input = [];
let cnt = -1;
rl.on('line', function (x) {
  cnt += 1;
  if (cnt === 0) {
    input.push(x.split(' ').map(Number));
  } else if (cnt === input[0][1]) {
    input.push(x.split(' ').map(Number));
    rl.close();
  } else {
    input.push(x.split(' ').map(Number));
  }
}).on('close', function () {
  const [N, K, P, L] = input[0];

  let cur = 1;

  for (let i = 0; i < L; i++) {
    for (let j = 1; j <= K; j++) {
      cur += N - (input[j][i] % N);

      if (cur > N) {
        cur -= N;
      }

      if (cur === P) {
        console.log(`${j} ${i + 1}`);

        process.exit();
      }
    }
  }
  console.log(-1);
  process.exit();
});
