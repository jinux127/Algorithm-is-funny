function solution(a, b) {
  var answer = 0;
  if (a === b) {
    return a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
    return answer;
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  }
}

console.log(solution(3, 5));
