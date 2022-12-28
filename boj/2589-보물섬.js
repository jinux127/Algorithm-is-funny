const case1 = `2 10
LLWWWLLLLL
LLWWWLLLLL`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [first, ...arr] = inputCase.toString().trim().split(/\n/);
const [col, row] = first.split(' ').map(Number);

const sol = (col, row, arr) => {
  const map = arr.map((item) => item.split(''));
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  const bfs = (y, x) => {
    const queue = [];
    queue.push({ y, x });

    const visited = Array.from(Array(col), () => new Array(row).fill(0));

    visited[y][x] = 1;

    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nY = cur.y + dy[i];
        const nX = cur.x + dx[i];
        if (0 <= nY && nY < col && nX >= 0 && nX < row) {
          if (!visited[nY][nX] && map[nY][nX] === 'L') {
            visited[nY][nX] = visited[cur.y][cur.x] + 1;

            queue.push({ y: nY, x: nX });
          }
        }
      }
    }
    return Math.max(...visited.flat());
  };

  let maxValue = 0;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (map[i][j] === 'L') {
        maxValue = Math.max(maxValue, bfs(i, j));
      }
    }
  }
  console.log(maxValue - 1);
};

sol(col, row, arr);
