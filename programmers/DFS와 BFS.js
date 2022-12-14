// N과 M 2
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const [_, ...args] = input;
const [N, M, V] = _.split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => new Array());
const visited_dfs = new Array(N + 1).fill(false);
const result_dfs = [];

args.forEach((arg) => {
  const [s, e] = arg.split(' ').map(Number);
  graph[s].push(e);
  graph[e].push(s);
});

graph.forEach((item) => item.sort((a, b) => a - b));

const dfs = (v) => {
  // 방문처리
  visited_dfs[v] = true;

  // 결과 처리
  result_dfs.push(v);

  // dfs 처리
  for (const node of graph[v]) {
    !visited_dfs[node] ? dfs(node) : null;
  }
};
dfs(V);
console.log(result_dfs);

const bfs = (v) => {
  // 방문처리할
  const visited = [];
  // 방문할 목록 큐
  let needVisit = [];

  needVisit.push(v);
  // 모두 방문할 때 까지 방문
  while (needVisit.length) {
    // 방문한 노드
    const node = needVisit.shift();
    // 방문하지 않았따면
    if (!visited.includes(node)) {
      // 방문처리
      visited.push(node);
      //방문할 목록 처리
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};
console.log(bfs(V));
