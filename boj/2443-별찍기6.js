const case1 = `5`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {
  const N = Number(input[0]);
  let answer = '';
  for (let i = 0; i < N; i++) {
    let str = '';
    for (let j = i; j > 0; j--) {
      str += ' ';
    }
    for (let j = 2 * (N - i) - 1; j > 0; j--) {
      str += '*';
    }
    str += '\n';
    answer += str;
  }
  console.log(answer);
};

sol();
