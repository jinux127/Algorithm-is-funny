const case1 = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [N, ...arr] = inputCase.toString().trim().split(/\n/);
const tpArr = arr.map((item) => item.split(' ').map(Number));

const sol = () => {
  const dp = new Array(Number(N)).fill(0);

  for (let i = 0; i < Number(N); i++) {
    // 0 ~ 6
    const [duration, profit] = tpArr[i];
    if (i + duration > Number(N)) continue;
    dp[i] += profit;

    for (let j = i + duration; j < Number(N); j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }

  console.log(Math.max(...dp));
};

sol();
