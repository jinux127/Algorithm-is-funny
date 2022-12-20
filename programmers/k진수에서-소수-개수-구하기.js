function solution(n, k) {
  const a = n.toString(k).split('0');

  return a.filter((v) => isPrime(+v)).length;
}

const isPrime = (n) => {
  if (!n || n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(solution(437674, 3));
