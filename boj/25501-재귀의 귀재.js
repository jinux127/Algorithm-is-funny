const case1 = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);
const [T, ...arr] = input;

const sol = () => {
  const isPalin = (str, s, e, callCnt) => {
    if (s >= e) return `1 ${callCnt}`;
    else if (str[s] !== str[e]) return `0 ${callCnt}`;
    else return isPalin(str, s + 1, e - 1, callCnt + 1);
  };

  const answer = [];

  arr.forEach((item) => {
    answer.push(isPalin(item, 0, item.length - 1, 1));
  });

  console.log(answer.join('\n'));
};

sol();
