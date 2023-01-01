const case1 = `15 28 19`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [E, S, M] = inputCase.toString().trim().split(/\n/)[0].split(' ').map(Number);

const sol = () => {
  let answer = 1;

  while ((answer - E) % 15 !== 0 || (answer - S) % 28 !== 0 || (answer - M) % 19 !== 0) {
    answer += 1;
  }

  console.log(answer);
};

sol();
