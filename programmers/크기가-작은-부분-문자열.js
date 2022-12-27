function solution(t, p) {
  let answer = 0;
  const leng = p.length;
  const tArr = t.split('');

  for (let i = 0; i < t.length; i++) {
    let str = '';
    if (t.length - i < leng) break;

    for (let j = 0; j < leng; j++) {
      str += t[i + j];
    }
    if (Number(str) <= Number(p)) answer += 1;
  }
  return answer;
}

console.log(solution('3141592', '271'));
