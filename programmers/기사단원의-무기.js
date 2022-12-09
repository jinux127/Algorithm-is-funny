// 기사의 공격력: 기사 번호의 약수 개수
// 제한 수치보다 클 경우 협약기관에서 정한 무기 구매
// 공격력 1당 = 1kg 철
// 필요 철무게 계산
/**
 *
 * @param {number} number 기사단원의 수
 * @param {number} limit 제한 수치
 * @param {number} power 공격력 초과 시 사용할 공격력
 * @returns
 */
function solution(number, limit, power) {
  var answer = 0;
  const attackArr = [];

  for (let i = 1; i <= number; i += 1) {
    attackArr.push(getDivisors(i));
  }

  attackArr.forEach((item) => {
    if (item > limit) answer += power;
    else {
      answer += item;
    }
  });

  return answer;
}

function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors.length + 1;
}

console.log(solution(5, 3, 2));
