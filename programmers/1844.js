//게임 맵 최단거리

function solution(maps) {
  var answer = 0;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);

  while (queue.length > 0) {
    [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] === 1 && maps[nx][ny] === 1) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  console.log(visited);
  return visited[n - 1][m - 1] == 1 ? -1 : visited[n - 1][m - 1];
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
