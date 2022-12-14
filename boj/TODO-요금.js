//

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
// let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용
let [T, K1, P1, K2, P2] = '92 10 90 20 170'.split(' ');

/**
 * 최소요금 구하기
 * @param {number} T 영식이가 한달에 보내는 문자메시지 개수
 * @param {number} K1 첫번째 문자메시지 개수
 * @param {number} P1 첫 번째 문자팩의 가격
 * @param {number} K2 두 번째 문자팩의 메시지 개수
 * @param {number} P2 두 번째 문자팩의 가격
 */
function solution(T, K1, P1, K2, P2) {
  const DEFAULT_FEE = 10;
}

console.log(solution(T, K1, P1, K2, P2));
