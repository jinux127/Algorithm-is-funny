/**
 * 가로의 길이가 n 세로의 길이가 2인 직사각형 바닥을 가로 길이 2 세로의 길이 1인 직사각형 타일로 몇가지 방법으로 채울 수 있는가?
 * @param {number} n 가로의 길이
 * @returns
 */
function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n];
}
