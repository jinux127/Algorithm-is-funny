//

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용
const [N, ...arg] = input;
/**
 * 
 * 2
11:02 11
15:30 01
 */
/**
 * 07:00 19:00 1분에 10원
 * 19:00 07:00 1분에 5원
 * @param {number} N 영식이가 한달에 보내는 문자메시지 개수
 * @param {str[]} strArr 첫번째 문자메시지 개수
 */
function solution(N, strArr) {
  const obj = {};
  const A_mark = 7 * 60;
  const B_mark = 19 * 60;
  let result = 0;
  strArr.forEach((str) => {
    const [clock, time] = str.split(' ');
    const [hh, mm] = clock.split(':').map(Number);

    let startTime = hh * 60 + mm;

    for (let i = 0; i < Number(time); i++) {
      if (startTime >= A_mark && startTime < B_mark) {
        result += 10;
      } else {
        result += 5;
      }
      startTime += 1;
    }
  });
  return result;
}

console.log(solution(N, arg));
