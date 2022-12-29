const case1 = `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [first, ...arr] = inputCase.toString().trim().split(/\n/);
const [M, N] = first.split(' ').map(Number);

const sol = (M, N, arr) => {
  const box = arr.map((item) => item.split(' ').map(Number));
  const dxArr = [0, 0, -1, 1];
  const dyArr = [1, -1, 0, 0];
  const queue = [];

  // 익은 토마토를 하루에 전부 처리해야하므로 개수를 세어준다.
  box.forEach((arr, i) => {
    let idx = -1;
    while (true) {
      idx = arr.indexOf(1, idx + 1);
      if (idx === -1) break;
      queue.push({ y: i, x: idx });
    }
  });

  let day = 0;
  let queueIndex = 0;

  const bfs = (x, y) => {
    while (queue.length !== queueIndex) {
      const { x, y } = queue[queueIndex];
      queueIndex++;
      dxArr.forEach((dx, idx) => {
        const dy = dyArr[idx];
        const nx = x + dx;
        const ny = y + dy;

        if (0 <= nx && M > nx && 0 <= ny && N > ny && box[ny][nx] === 0) {
          box[ny][nx] = box[y][x] + 1;
          queue.push({ y: ny, x: nx });
          day = box[y][x];
        }
      });
    }
  };

  bfs();

  for (let i = 0; i < box.length; i++) {
    const arr = box[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(day);
};

sol(M, N, arr);
