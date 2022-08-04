function solution(number) {
  var answer = 0;
  const MAX = number.length;
  const visited = new Array(MAX).fill(false);

  const dfs = (idx, cnt) => {
    let result = 0;
    if (cnt === 3) {
      for (let i = 0; i < MAX; i++) {
        if (visited[i] === true) {
          result += number[i];
        }
      }
      if (result === 0) answer += 1;
      return;
    }

    for (let i = idx; i < MAX; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;

      dfs(i, cnt + 1);
      visited[i] = false;
    }
  };

  dfs(0, 0);

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
