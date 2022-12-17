/**
 *
 * @param {*} participant
 * @param {*} completion
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

var solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
