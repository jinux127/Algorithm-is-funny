function solution(a, b, n) {
  var answer = 0;
  let returnA;
  let other;

  while (n >= a) {
    returnA = Math.floor(n / a) * b;
    answer += returnA;
    other = n % a;
    n = returnA + other;
  }

  return answer;
}
