function solution(topping) {
  var answer = 0;
  const m1 = new Map();
  const m2 = new Map();

  topping.map((item) => (m1.has(item) ? m1.set(item, m1.get(item) + 1) : m1.set(item, 1)));

  topping.map((item) => {
    m1.set(item, m1.get(item) - 1);
    if (m1.get(item) === 0) m1.delete(item);

    m2.has(item) ? m2.set(item, m2.get(item) + 1) : m2.set(item, 1);

    if (m1.size === m2.size) {
      answer += 1;
    }
  });

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
