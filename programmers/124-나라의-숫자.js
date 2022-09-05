function solution(n) {
  var answer = '';
  const oneTwoFour = ['4', '1', '2'];
  while (n > 0) {
    const remainder = n % 3;
    answer = oneTwoFour[remainder] + answer;
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}

console.log(solution(9));

1; // 1
2; // 2
4; // 3
11; // 11
12; // 12
14; // 13
21;
22;
24;
41;
42;
44;
