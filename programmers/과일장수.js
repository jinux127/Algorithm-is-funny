/**
 * 한 상자에 사과 m개씩
 * 상자에 사과 중 가장 낮은 점수 p일 경우 한 상자의 가격 p * m
 * 최대 이익은?
 * (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
 * @param {number} k 사과의 최대 점수
 * @param {number} m 한 상자에 들어가는 사과의 수
 * @param {number} score 사과들의 점수
 * @returns number
 */
function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
