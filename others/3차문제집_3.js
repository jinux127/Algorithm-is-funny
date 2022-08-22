function solution(distance, scope, times) {
  var answer = 0;
  let obj = {};
  scope.map((item, i) => {
    let max = item[0] < item[1] ? item[1] : item[0];
    let min = item[0] > item[1] ? item[1] : item[0];
    for (let si = min; si <= max; si++) {
      obj[si]
        ? obj[si].push([times[i][0], times[i][0] + times[i][1]])
        : (obj[si] = [[times[i][0], times[i][0] + times[i][1]]]);
    }
  });
  for (let i = 1; i <= distance; i++) {
    answer += 1;
    if (obj[i]) {
      for (let j = 0; j < obj[i].length; j++) {
        let kkk = i % obj[i][j][1];
        if (kkk <= obj[i][j][0] && kkk > 0) {
          return answer;
        }
      }
    }
  }
  return answer;
}
