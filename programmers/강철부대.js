function solution(n, roads, sources, destination) {
  var answer = [];

  const graph = Array.from(Array(n + 1), () => new Array());
  let visited = new Array(n + 1).fill(0);

  for (let i = 0; i < roads.length; i++) {
    graph[roads[i][0]].push(roads[i][1]);
    graph[roads[i][1]].push(roads[i][0]);
  }

  let needVisit = [];
  needVisit.push(destination);

  if (v === destination) return count;

  answer = sources.map((source) => dfs(graph, source, 0));
  return answer;
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);
