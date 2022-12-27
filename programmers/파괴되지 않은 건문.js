function solution_fail(board, skill) {
  skill.forEach((sk) => {
    const [type, r1, c1, r2, c2, degree] = sk;
    if (type === 1) {
      // 공격
      for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
          board[i][j] -= degree;
        }
      }
    } else if (type === 2) {
      // 수리
      for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
          board[i][j] += degree;
        }
      }
    }
    console.log(board);
  });
  let answer = 0;
  board.forEach((c) => {
    c.forEach((e) => {
      if (e > 0) answer += 1;
    });
  });
  return answer;
}
function solution(board, skill) {
  const col = board.length;
  const row = board[0].length;

  const arr = Array.from(Array(col + 1), () => new Array(row + 1).fill(0));

  skill.forEach((sk) => {
    const [type, r1, c1, r2, c2, degree] = sk;
    const transDegree = type === 1 ? -degree : degree;
    arr[r1][c1] += transDegree;
    arr[r1][c2 + 1] += -transDegree;
    arr[r2 + 1][c1] += -transDegree;
    arr[r2 + 1][c2 + 1] += transDegree;
  });

  for (let r = 0; r < arr.length; r++) {
    for (let c = 1; c < arr[0].length; c++) {
      arr[r][c] += arr[r][c - 1];
    }
  }
  for (let r = 1; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      arr[r][c] += arr[r - 1][c];
    }
  }
  arr.forEach((row, rdx) => {
    row.forEach((col, cdx) => {
      if (board[rdx] && board[rdx][cdx]) {
        board[rdx][cdx] += col;
      }
    });
  });
  let answer = 0;
  board.forEach((row, rdx) => {
    row.forEach((col, cdx) => {
      if (col > 0) answer += 1;
    });
  });

  return answer;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
