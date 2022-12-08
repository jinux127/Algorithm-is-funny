function solution(k, score) {
  var answer = [];
  const temp = [];

  score.forEach((item) => {
    if (temp.length < k) {
      temp.push(item);
    } else {
      if (temp[temp.length - 1] < item) {
        temp.pop();
        temp.push(item);
      }
    }
    temp.sort((a, b) => b - a);

    answer.push(temp[temp.length - 1]);
  });
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
