// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 1; // 평지일경우 1
  let flag = 'flat';
  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i + 1]) {
      if (flag !== 'up') count += 1;
      flag = 'up';
    } else if (A[i] > A[i + 1]) {
      if (flag !== 'down') count += 1;
      flag = 'down';
    }
  }

  return count;
}
