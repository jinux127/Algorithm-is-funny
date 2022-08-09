function solution(n, t, m, p) {
  let queue = [];
  let result = [];
  let currentNumDecimal = -1;
  let turn = 0;
  while (result.length < t) {
    if (queue.length === 0) {
      currentNumDecimal += 1;
      currentNumDecimal
        .toString(n)
        .split('')
        .forEach((x) => queue.push(x));
    }
    const currentChar = queue.shift();
    if (turn % m === p - 1) result.push(currentChar);
    turn++;
  }
  return result.join('').toUpperCase();
}

console.log(solution(2, 4, 2, 1));
