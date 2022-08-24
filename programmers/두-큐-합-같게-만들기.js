function solution(queue1, queue2) {
  var answer = -2;
  const queue = [...queue1, ...queue2];
  let pointer1 = 0;
  let pointer2 = queue1.length - 1;
  let max_index = queue.length;
  let sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let target = queue.reduce((acc, cur) => acc + cur, 0) / 2;
  let cnt = 0;

  while (sum !== target) {
    cnt += 1;
    if (sum < target) {
      pointer2 += 1;
      if (pointer2 === max_index) pointer2 = 0;
      sum += queue[pointer2];
    } else if (sum > target) {
      sum -= queue[pointer1];
      pointer1 += 1;
      if (pointer1 === max_index) pointer1 = 0;
    }

    if (cnt === max_index * 2) return -1;
  }

  return cnt;
}
