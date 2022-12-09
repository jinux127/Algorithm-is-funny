const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
/**
 * 다음 조건 중 하나를 만족하는 가장 큰 양의 정수 a 값 구하기
 * 1. 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드를 하나도 나눌 수 없는 정수 a
 * 2. 영희가 가진 카드들에 적힌 모든 수 나누기 가능, 철수가 가진 카드들에 적힌 모든 수 나눌 수 없는 정수 a
 * @param {Array} arrayA 철수가 가진 카드배열
 * @param {Array} arrayB 영희가 가진 카드배열
 * @returns
 */
function solution(arrayA, arrayB) {
  var answer = 0;
  let GCDarrA = arrayA.reduce((acc, cur) => getGCD(acc, cur), arrayA[0]);
  let GCDarrB = arrayB.reduce((acc, cur) => getGCD(acc, cur), arrayB[0]);

  // 최대공약수의 공약수 배열
  const GCDarrA_GCD = [];
  const GCDarrB_GCD = [];
  for (let i = 1; i <= GCDarrA; i++) {
    if (GCDarrA % i === 0) GCDarrA_GCD.push(i);
  }
  for (let i = 1; i <= GCDarrB; i++) {
    if (GCDarrB % i === 0) GCDarrB_GCD.push(i);
  }

  // 최대공약수의 공약수 만큼 arrB 배열 순회하며 나누기
  let A_a = 0;
  for (let i = GCDarrA_GCD.length - 1; i >= 0; i--) {
    let isA = true;
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayB[j] % GCDarrA_GCD[i] === 0) {
        isA = false;
        break;
      }
    }
    if (isA) {
      A_a = GCDarrA_GCD[i];
      break;
    }
  }

  let B_a = 0;
  for (let i = GCDarrB_GCD.length - 1; i >= 0; i--) {
    let isB = true;
    for (let j = 0; j < arrayA.length; j++) {
      if (arrayA[j] % GCDarrB_GCD[i] === 0) {
        isB = false;
        break;
      }
    }
    if (isB) {
      B_a = GCDarrB_GCD[i];
      break;
    }
  }

  console.log(B_a, A_a);
  answer = Math.max(B_a, A_a);
  return answer === 1 ? 0 : answer;
}

console.log(solution([10, 20], [5, 17]));
