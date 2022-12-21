/**
 * 길을 통과하는데 걸리는 시간 1
 * 부대로 복귀하는 최단 경로 배열
 * 복귀가 불가능한 경우 -1
 * @param {*} n 총 지역수
 * @param {*} roads 두 지역을 왕복할 수 있는 길 정보
 * @param {*} sources 각 부대원들이 위치한 다른 지역 정보
 * @param {*} destination 강철부대의 지역
 * @returns
 */
function solution(n, roads, sources, destination) {
  const graph = Array.from(Array(n + 1), () => new Array());

  roads.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const visited = new Array(n + 1).fill(Infinity);
  // bfs
  const bfs = (desti) => {
    const queue = [desti];
    visited[desti] = 0;
    while (queue.length > 0) {
      const cur = queue.shift();

      for (let ele of graph[cur]) {
        if (visited[cur] + 1 < visited[ele]) {
          visited[ele] = visited[cur] + 1;
          queue.push(ele);
        }
      }
    }
  };
  bfs(destination);

  return sources.map((source) => (visited[source] === Infinity ? -1 : visited[source]));
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
