function solution(arr) {
  var answer = 0;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  answer = lcm(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

console.log(solution([2, 6, 8, 14]));
