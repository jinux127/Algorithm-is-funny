const case1 = `20
7
23
19
10
15
25
8
13`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/).map(Number);

const sol = () => {
  let answer = [];

  const dfs = (cnt, sum, idx, arr) => {
    if (answer.length) return;

    if (sum > 100) return;

    if (idx === 9) {
      if (cnt === 7 && sum === 100) {
        answer = arr;
      }
      return;
    }

    dfs(cnt, sum, idx + 1, arr);
    dfs(cnt + 1, sum + input[idx], idx + 1, [...arr, input[idx]]);
  };

  dfs(0, 0, 0, []);
  console.log(answer.sort((a, b) => a - b).join('\n'));
};

sol();
