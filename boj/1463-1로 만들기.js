// const case1 = `10`;

// const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
// const input = inputCase.toString().trim().split(/\n/);
// const N = Number(input[0]);
// const sol = () => {
//   const dp = [0, 0, 1, 1];

//   for (let i = 4; i <= N; i++) {
//     dp[i] = dp[i - 1] + 1;
//     if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//     if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//   }

//   console.log(dp);
// };

// sol();

const case1 = `10`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);
const N = Number(input[0]);
const sol = () => {
  const dp = [0, 0, 1, 1];

  /**
   * dp[2] = 1
   * dp[3] = 1
   * dp[4] = 1 + dp[3] or dp[2] = 2
   * dp[5] = 1 + dp[4] = 3
   * dp[6] = dp[2] + dp[3]
   */
  for (let i = 4; i <= N; i++) {
    if (i % 3 === 0) dp[i] = dp[i / 3] + dp[3];
    if (i % 2 === 0) {
      if (dp[i] && dp[i] > dp[i / 2] + dp[2]) {
        dp[i] = dp[i / 2] + dp[2];
      }

      if (!dp[i]) dp[i] = dp[i / 2] + dp[2];
    }

    if (dp[i] && dp[i] > dp[i - 1] + 1) {
      dp[i] = dp[i - 1] + 1;
    }

    if (!dp[i]) dp[i] = dp[i - 1] + 1;
  }

  console.log(dp[N]);
};

sol();
