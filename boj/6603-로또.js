const case1 = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

input.pop();

const testCase = input.map((item) => item.split(' '));

const sol = () => {
  let answer = '';

  testCase.forEach((item) => {
    const [k, ...arr] = item;

    function dfs(v, pick) {
      if (pick.length === 6) {
        answer += `${pick.join(' ')}\n`;
        return;
      }

      for (let i = v; i < k; i++) {
        dfs(i + 1, [...pick, arr[i]]);
      }
    }

    dfs(0, []);
  });

  console.log(answer);
};

sol();
