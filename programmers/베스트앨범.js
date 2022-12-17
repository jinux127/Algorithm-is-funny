/**
 * 장르별 가장 많이 재생된 노래 두 개씩 출시
 * 1. 속한 노래가 많이 재생된 장르 먼저
 * 2. 장르 내에서 많이 재생된 노래 먼저
 * 3. 재생 횟수 같다면 고유 번호가 낮은 노래 순
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns
 */
function solution(genres, plays) {
  const total = {};
  const list = {};
  genres.forEach((genre, i) => {
    total[genre] = total[genre] ? total[genre] + plays[i] : plays[i];
  });

  let dupDic = {};
  return genres
    .map((genre, i) => ({ genre, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return total[b.genre] - total[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
