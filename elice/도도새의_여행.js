const { SlowBuffer } = require('buffer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sol = (arr) => {
  const [R, C, K] = arr.split(' ').map(Number);

  K === 1 ? console.log(1) : R % 2 === 1 && C % 2 === 1 ? console.log(0) : console.log(1);

  // const map = Array.from(Array(R), () => new Array(C).fill(0));

  // const dx = [0, 0, -1, 1];
  // const dy = [1, -1, 0, 0];

  // const dfs = (x, y) => {
  //     map[y][x] += 1;

  //     for (let i = 0; i < 4; i++) {
  //         let nx = x + dx[i];
  //         let ny = y + dy[i];

  //         if (nx < 0 || ny < 0 || nx >= C || ny >= R || map[ny][nx] !== 1)
  //             continue;

  //         dfs(nx, ny);
  //     }
  // };
};

let input = [];

rl.on('line', function (line) {
  input.push(line);
  rl.close();
});

rl.on('close', function () {
  sol(input[0]);
  process.exit();
});
