/**
 * 최소 필요 피로도: 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
 * 소모 피로도: 던전을 탐험한 후 소모되는 피로도
 * 최대한 많은 던전 탐험하기
 * @param {number} k 현재 피로도
 * @param {[number, number][]} dungeons [최소필요피로도, 소모 피로도][]
 * @returns
 */
function solution(k, dungeons) {
  let clearCnt = 0;
  const visited = new Array(dungeons.length).fill(false);
  const dfs = (k, curCnt) => {
    clearCnt = Math.max(curCnt, clearCnt);

    for (let i = 0; i < dungeons.length; i++) {
      const [minK, useK] = dungeons[i];

      if (k >= minK && !visited[i]) {
        visited[i] = true;
        dfs(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return clearCnt;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
