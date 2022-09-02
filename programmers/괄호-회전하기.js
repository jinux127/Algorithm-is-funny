function solution(s) {
  var answer = -1;
  const arr = s.split('');
  let stck = [];
  const obj = {
    ']': '[',
    ')': '(',
    '}': '{',
    '[': '',
    '(': '',
    '{': '',
  };
  let count = 0;
  let temp = arr;
  // console.log(temp);
  for (let i = 0; i < arr.length; i++) {
    temp.map((char) => {
      if (stck[stck.length - 1] === obj[char]) {
        stck.pop();
      } else {
        stck.push(char);
      }
      // console.log(stck);
    });
    if (stck.length === 0) count += 1;
    stck = [];
    arr.push(arr.shift());
    temp = arr;
  }

  return count;
}

console.log(solution('}]()[{'));
