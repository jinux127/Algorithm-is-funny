function solution(n, wires) {
  const map = {};

  wires.forEach((wire) => {
    const [a, b] = wire;
    if (!map[a]) map[a] = [];
    if (!map[b]) map[b] = [];
    map[a].push(b);
    map[b].push(a);
  });

  // 끊어졌다고 가정하고 순회 및 연결된 노드 카운팅
  const searchNode = (firstNode, exceptNode) => {
    const stack = [firstNode];
    const visited = [];
    let count = 0;
    while (stack.length) {
      const curNode = stack.pop();
      visited[curNode] = true;
      map[curNode].forEach((linkNode) => {
        if (!visited[linkNode] && linkNode !== exceptNode) stack.push(linkNode);
      });
      count += 1;
    }
    return count;
  };
  let answer = wires.length;
  // 전체 노드 순회
  wires.forEach((wire) => {
    const [a, b] = wire;
    const dif = Math.abs(searchNode(a, b) - searchNode(b, a));

    answer = dif < answer ? dif : answer;
  });

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

/**
 * 1 2 3
 * 2 3
 * 3 1 2
 */
