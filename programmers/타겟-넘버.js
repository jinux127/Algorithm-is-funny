/**
 * 순서를 바꾸지 않고 +,- 연산을 해서 타겟넘버를 만들기
 * @param {number[]} numbers 사용할 수 있는 숫자가 담긴 배열
 * @param {number} target 타겟넘버
 * @returns
 */
function solution(numbers, target) {
  var answer = 0;
  const dfs = (level, sum) => {
    if (level === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level - 1, sum - numbers[level]);
  };
  return answer;
}
