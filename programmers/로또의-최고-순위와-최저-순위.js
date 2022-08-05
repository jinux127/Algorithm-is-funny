function solution(lottos, win_nums) {
  var answer = [];
  let a = 0;
  let b = 0;
  lottos.map((lotto_num) => {
    if (win_nums.indexOf(lotto_num) !== -1) {
      a += 1;
    }
    if (lotto_num === 0) {
      b += 1;
    }
  });

  const result_arr = [6, 6, 5, 4, 3, 2, 1];
  return [result_arr[a + b], result_arr[a]];
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
