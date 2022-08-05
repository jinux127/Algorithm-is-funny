function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  return !(s.split('').filter(isNaN).length > 0);
}

console.log(solution('a234'));
