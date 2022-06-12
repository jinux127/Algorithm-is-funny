function solution(grid, k) {
  let answer = -1;
  // 타일 유형: 평지 '.', 숲 'F', 강 '#'
  // 하루 최대 이동 수 k
  // 평지, 숲으로 이동 가능
  // 야영은 평지에서만 가능
  // 야영 물자 소모 -> 야영 횟수 최소로
  const graph = grid.map((item) => item.split('')); // 그래프
  const sleepGraph = Array.from(Array(graph.length), () => new Array(graph[0].length).fill(Infinity)); // 야영 횟수 기록
  const visited = Array.from(Array(graph.length), () => new Array(graph[0].length).fill(false)); // 방문 여부 그래프
  // 이동방향
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  // dfs 수행
  const dfs = (x, y, sleep) => {
    // 1. 이동 방향 배열 순차적으로 수행
    // 2. 그래프 밖을 벗어나거나 강일 경우 스킵
    // 3. 다음 이동경로가 이동 수를 다 사용하고 숲인 경우 현재좌표에서 야영함
    // 4. 이동 후 sleepGraph에 현재 야영횟수를 최솟값으로 비교히여 저장
  };

  // sleepGraph에 목표 좌표로 값 리턴
  return answer;
}

console.log(solution(['..FF', '###F', '###.'], 4));
