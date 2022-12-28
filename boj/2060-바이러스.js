// 바이러스
const case1 = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const N = parseInt(input.shift());
const K = parseInt(input.shift());
const arr = input;

const sol = (N, K, arr) => {
  const graph = Array.from(Array(N + 1), () => new Array());
  const visited = new Array(N + 1).fill(false);
  for (const item of arr) {
    const [A, B] = item.split(' ').map(Number);
    graph[A].push(B);
    graph[B].push(A);
  }
  let count = 0;
  const dfs = (v) => {
    const stk = [];
    visited[v] = true;
    stk.push(v);
    while (stk.length > 0) {
      const node = stk.pop();
      for (const child of graph[node]) {
        if (!visited[child]) {
          dfs(child);
          count += 1;
        }
      }
    }
  };
  dfs(1);
  console.log(count);
};

sol(N, K, arr);
