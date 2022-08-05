function solution(n) {
  return new Array(n)
    .fill('_')
    .map((_, i) => (i % 2 === 0 ? '수' : '박'))
    .join('');
}

console.log(solution(4));
