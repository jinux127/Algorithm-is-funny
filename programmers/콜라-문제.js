function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const returnCola = Math.floor(n / a) * b;
    const otherCola = n % a;
    console.log(returnCola, otherCola);
    answer += returnCola;
    n = returnCola + otherCola;
  }
  return answer;
}

console.log(solution(3, 2, 20));
