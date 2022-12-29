function solution(N, number) {
  let answer = -1;
  const dfs = (n, temp) => {
    if (temp > 8) return;

    if (num === number) {
      if (answer === -1 || temp < answer) answer = temp;
      return;
    }
    let nn = 0;

    for (let i = 0; i < 8; i++) {
      nn = nn * 10 + n;
      dfs();
    }
  };
}

console.log(solution(5, 12));
