/**
 * 1차원 배열
 * 직관적으로 생성하면된다.
 * i부터 j의 합을 구한다 했을 때
 * S(i,j) = sum[j+1] - sum[i]이다.
 */
const arr = [2, 4, 1, -5, 2, -3];
const sum = [0, 2, 6, 7, 2, 4, 1];

/**
 * 2차원 배열
 * 해당 수 인덱스까지의 범위를 더하면 된다.
 * sum_arr[i][j] = arr[i-1][j-1] + sum_arr[i-1][j] + sum_arr[i][j-1] - sum_arr[i-1][j-1];
 */

const arr2 = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
const m = 4;
const n = 3;

const sum_arr = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    sum_arr[i][j] = arr2[i - 1][j - 1] + sum_arr[i - 1][j] + sum_arr[i][j - 1] - sum_arr[i - 1][j - 1];
  }
}

console.log(sum_arr);
