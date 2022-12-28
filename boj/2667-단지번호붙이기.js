const case1 = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);
const [N, ...arr] = input;

const sol = (N, arr) => {
  const map = arr.map((item) => item.split('').map(Number));
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  let home = 0;

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= N || y >= N) return false;

    if (map[y][x] === 1) {
      map[y][x] = 0;
      home += 1;
      for (let i = 0; i < 4; i++) {
        dfs(x + dx[i], y + dy[i]);
      }
      return true;
    }
    return false;
  };

  let count = 0;
  const countHome = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j)) {
        count++;
        countHome.push(home);
        home = 0;
      }
    }
  }
  console.log(count);
  console.log(countHome.sort((a, b) => a - b).join('\n'));
};

sol(N, arr);
