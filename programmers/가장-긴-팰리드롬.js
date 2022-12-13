/**
 * 앞뒤를 뒤짚어도 같은 문자열을 s의 가장 긴 부분문자열을 구해라
 * @param {string} s
 * @returns
 */
function solution(s) {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const isPalin = isPalindrome(s.slice(j, i + j));
      if (isPalin) return i;
    }
  }
  return 1;
}
const isPalindrome = (s) => {
  const half = Math.floor(s.length / 2);

  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};

function solution_fail(s) {
  var answer = 1;
  // 순회하는 문자열을 기준으로 앞뒤로 같은 경우를 탐색?
  // 예외) abba의 경우는?
  // 예외) aaaa의 경우는?
  //
  const arr = s.split('');

  for (let i = 1; i < arr.length; i++) {
    let nowLength = 1;
    let position = 1;
    while (arr[i - position] === arr[i + position]) {
      nowLength = 1 + position * 2;
      position++;

      if (nowLength === arr.length) break;
    }

    answer = answer < nowLength ? nowLength : answer;
  }

  return answer;
}

console.log(solution('abba'));
console.log(solution('aaaa'));
