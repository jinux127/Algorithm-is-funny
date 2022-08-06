function solution(pin) {
  var answer = true;
  const arr = pin.split('').map(Number);

  if (arr.filter((item) => item === arr[0]).length === 4) return false;
  let cnt = 0;
  let flag = '';
  for (let i = 0; i < arr.length - 1; i++) {
    if (flag === 'i') {
      if (arr[i + 1] === arr[i] + 1) {
        return false;
      }
      flag = '';
      cnt = 0;
    } else if (flag === 'd') {
      if (arr[i + 1] === arr[i] - 1) {
        return false;
      }
      flag = '';
      cnt = 0;
    } else {
      if (arr[i + 1] === arr[i] + 1) {
        flag = 'i';
        cnt += 1;
      } else if (arr[i + 1] === arr[i] - 1) {
        flag = 'd';
        cnt += 1;
      }
    }
  }

  return true;
}

console.log(solution('9998'));
