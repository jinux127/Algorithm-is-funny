const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const [N, K, Q, M] = input.shift().split(' ').map(Number);

const arrK = input.shift().split(' ').map(Number);
const arrQ = input.shift().split(' ').map(Number);
const [S, E] = input.shift().split(' ').map(Number);

const sol = (N, arrK, arrQ, S, E) => {
  const visited = new Array(N + 3).fill(false);
  /* 문제 풀이 */
  const preSum = [0, 0, 0];

  for (let i = 3; i <= N + 2; i++) {
    preSum[i] = preSum[i - 1];

    if (sleeps.includes(i)) continue;

    for (const student of students) {
      if (i % student === 0) {
        preSum[i] += 1;
        break;
      }
    }
  }

  let answer = '';
  for (let i = 3; i < M + 3; i++) {
    const [S, E] = input[i];
    answer += E - S + 1 - (preSum[E] - preSum[S - 1]) + '\n';
  }

  console.log(answer.substring(0, answer.length - 1));
};

sol(N, arrK, arrQ, S, E);
