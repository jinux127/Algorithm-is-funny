/**
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있음
 * 2. words에 있는 단어로만 변환할 수 있음.
 *
 * @param {string} begin
 * @param {string} target
 * @param {string[]} words 단어의 집합
 * @returns
 */
function solution(begin, target, words) {
  let queue = [];
  let answer = 0;
  let visited = [];
  if (!words.some((ele) => ele === target)) return 0;

  queue.push([begin, answer]);

  while (queue) {
    let [v, cnt] = queue.shift();

    if (v === target) {
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++;
      }

      if (notEqual === 1) {
        queue.push([word, ++cnt]);

        visited.push(word);
      }
    });
  }

  return answer;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
