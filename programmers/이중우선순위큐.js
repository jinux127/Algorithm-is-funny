function solution(operations) {
  const arr = [];
  operations.forEach((operation) => {
    const [oper, val] = operation.split(' ');

    if (oper === 'I') {
      // 값 삽입
      arr.push(Number(val));
    } else if (oper === 'D') {
      if (arr.length !== 0 && val === '-1') {
        // 최솟값 삭제
        arr.sort((a, b) => b - a);
      } else if (arr.length !== 0 && val === '1') {
        // 최댓값 삭제
        arr.sort((a, b) => a - b);
      }
      arr.pop();
    }
  });
  if (arr.length === 0) return [0, 0];

  arr.sort((a, b) => a - b);
  return [arr[arr.length - 1], arr[0]];
}

console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']));
