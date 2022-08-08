function solution(new_id) {
  var answer = '';
  let step2 = /[a-z0-9]-_\./g;

  console.log(new_id.replaceAll(step1));
  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
