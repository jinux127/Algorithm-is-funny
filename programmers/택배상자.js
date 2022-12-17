/**
 * 벨트 스택
 * 보조 벨트 스택
 * @param {number[]} order
 * @returns
 */
function solution(order) {
  const belt = [];
  let index = 0;
  for (let i = 1; i <= order.length; i++) {
    belt.push(i);
    while (belt.length > 0 && belt[belt.length - 1] === order[index]) {
      belt.pop();
      index++;
    }
  }
  return index;
}

console.log(solution([4, 3, 1, 2, 5]));

/**
 * 4 5
 * 1 2 3
 *
 *
 * 5
 * 1 2 3
 * 4
 *
 * 5
 * 1 2
 * 4 3
 *
 *
 */
