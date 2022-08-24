// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const isBreak = (x) => x === 'X' || x === '>' || x === '<' || x === '^' || x === 'v';
const isGuard = (x) => x === 'X' || x === '>' || x === '<' || x === '^' || x === 'v' || x === 'G';

function solution(B) {
  const arr = B.map((item) => item.split(''));
  let A_x;
  let A_y;
  function guard(x, y) {
    if (arr[y][x] === 'A') [A_x, A_y] = [x, y];
    if (arr[y][x] === '>') {
      for (let i = x + 1; i < arr[y].length; i++) {
        if (isBreak(arr[y][i])) break;
        if (arr[y][i] === 'A') return false;
        arr[y][i] = 'G';
      }
    } else if (arr[y][x] === '<') {
      for (let i = x - 1; i >= 0; i--) {
        if (isBreak(arr[y][i])) break;
        if (arr[y][i] === 'A') return false;
        arr[y][i] = 'G';
      }
    } else if (arr[y][x] === '^') {
      for (let i = y - 1; i >= 0; i--) {
        if (isBreak(arr[i][x])) break;
        if (arr[i][x] === 'A') return false;
        arr[i][x] = 'G';
      }
    } else if (arr[y][x] === 'v') {
      for (let i = y + 1; i < arr.length; i++) {
        if (isBreak(arr[i][x])) break;
        if (arr[i][x] === 'A') return false;
        arr[i][x] = 'G';
      }
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!guard(j, i)) return false;
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  queue.push([A_x, A_y]);
  const visitedArr = Array.from(new Array(arr.length), () => new Array(arr[0].length).fill(0));

  while (queue.length > 0) {
    [x, y] = queue.shift();
    if (arr[y][x] === 'A') arr[y][x] = '.';
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx < 0 || nx >= arr[0].length || ny < 0 || ny >= arr.length) continue;

      if (isGuard(arr[ny][nx])) continue;

      if (arr[ny][nx] === '.' && visitedArr[ny][nx] === 0) {
        visitedArr[ny][nx] = 1;
        queue.push([nx, ny]);
      }
    }
  }

  if (visitedArr[arr.length - 1][arr[0].length - 1] === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(['...Xv', 'AX..^', '.XX..']));
