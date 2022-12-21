/**
 *
 * @param {*} n 행의 개수
 * @param {*} m 열의 개수
 * @param {*} x 정수
 * @param {*} y 정수
 * @param {*} queries 쿼리들의 목록 2차원 배열
 * @returns
 */
function solution(n, m, x, y, queries) {
  var answer = -1;
  const map = Array.from(Array(m), () => new Array(n));
  console.log(map);
  // const reduce = (type,dx)=>
  return answer;
}

console.log(
  solution(2, 2, 0, 0, [
    [2, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [2, 1],
  ])
);
