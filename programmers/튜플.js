function solution(s) {
  var answer = [];
  console.log(
    s
      .replace(/\{/g, '')
      .split('}')
      .filter((item) => item)
      .sort((a, b) => a.length - b.length)
      .map((item) => item.split(',').filter((item) => item))
      .map((arr) => arr.map((item) => (answer.indexOf(item) === -1 ? answer.push(item) : null)))
  );
  return answer.map(Number);
}

console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
