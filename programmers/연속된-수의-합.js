function solution(num, total) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  while (total !== sum) {
    if (total > sum) {
      arr.shift();
      arr.push(arr[arr.length - 1] + 1);
    } else {
      arr.pop();
      arr.unshift(arr[0] - 1);
    }
    sum = arr.reduce((acc, cur) => acc + cur, 0);
  }

  return arr;
}

console.log(solution(3, 12));
