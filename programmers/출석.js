function solution(ids, days) {
  const answer = [];
  const obj = {};
  const arr = [];
  for (let i = 0; i < ids.length; i++) {
    obj[ids[i]] ? obj[ids[i]].push(days[i]) : (obj[ids[i]] = days[i]);
  }
  console.log(obj);

  return answer;
}

console.log(solution([1, 1, 1], ['월', '화', '월']));
