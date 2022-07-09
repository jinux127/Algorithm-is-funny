// 2164

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (param) => {
  // 1. 제일 위에 있는 카드 바닥에 버림
  // 2. 제일 위에 있는 카드 제일 아래에 있는 카드 밑으로 옮김
  // 3. 반복
  const arr = [];

  for (let i = 1; i <= param; i++) {
    arr.push(i);
  }

  // 123 32 2
  // 1234 342 24 4
  // 12345 3452 524 42 2
  // 123456 34562 5624 246 64 4
  return param % 2 === 0 ? 2 : 4;
};

sol(Number(input[0]));
