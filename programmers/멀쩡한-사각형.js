function solution(w, h) {
  var answer = 1;
  for (i = 1; i < Math.max(w, h) + 1; i++) {
    result = 1;
    if (w % i == 0 && h % i == 0) {
      result = i;
    }
    answer = Math.max(answer, result);
  }
  return w * h - (w + h - answer);
}
