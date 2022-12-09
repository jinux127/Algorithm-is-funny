/**
 * 보유한 병사 n 명으로 적의 공격을 막음
 * 한 라운드에 enemy[i] 병사 소모
 * 무적권 사용 시 병사 소모 없이 막을 수 있음
 * 무적권 사용 횟수는 k
 * 최대한 많은 라운드 진행
 * @param {number} n 보유한 병사 수
 * @param {number} k 무적권 횟수
 * @param {Array} enemy 적 배열
 * @returns
 */
function solution(n, k, enemy) {
  var answer = 0;

  const dfs = (n, k, i) => {
    dfs(n - enemy[i]);
    return;
  };

  dfs();

  return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
