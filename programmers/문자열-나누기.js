function solution(s) {
  var answer = 0;
  const arr = s.split('');
  // 첫글자 x 읽음
  let isSameCount = 0;
  let isNotSameCount = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    // 오른쪽으로 읽으며 x인 횟수 카운팅, x가 아닌 다른 글자 횟수 카운팅
    arr[i] === arr[index] ? (isSameCount += 1) : (isNotSameCount += 1);
    // 두횟수가 같아지면 멈추고 그 자리에서 분리
    // 분리한 문자열 빼고 남은 부분 반복 없다면 종료
    if (isNotSameCount === isSameCount) {
      answer += 1;
      index = i + 1;
    } else if (i === arr.length - 1) {
      // 두 횟수가 다른 상태에서 글자 없다면 분리, 종료
      answer += 1;
    }
  }
  // 분해한 문자열 개수 리턴
  return answer;
}

console.log(solution('abracadabra'));
