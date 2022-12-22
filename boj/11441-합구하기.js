const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const ijArr = [];
input.map((item) => {
  ijArr.push(item.split(' ').map(Number));
});

const sol = () => {
  const sumArr = [arr[0]];
  for (let i = 1; i < N; i++) {
    sumArr[i] = sumArr[i - 1] + arr[i];
  }
  const answer = [];

  ijArr.forEach(([i, j]) => {
    const total = sumArr[j - 1];
    const before = i === 1 ? 0 : sumArr[i - 2];

    answer.push(total - before);
  });

  console.log(answer.join('\n'));
};

sol();
