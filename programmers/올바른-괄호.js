function solution(s) {
  var answer = true;
  let arr = [];
  let aaa = s.split('');
  for (let i = 0; i < aaa.length; i++) {
    if (aaa[i] === ')') {
      arr[arr.length - 1] === '(' ? arr.pop() : arr.push(aaa[i]);
    } else {
      arr.push(aaa[i]);
    }

    if (arr[0] === ')') return false;
  }

  return arr.length ? false : true;
}
