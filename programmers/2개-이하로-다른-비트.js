function solution(numbers) {
  return numbers.map((item) => detect(item.toString(2))).map((item) => parseInt(item, 2));
}

function detect(strNumber) {
  const arr = strNumber.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '0') {
      arr[i] = '1';
      if (i < arr.length - 1) arr[i + 1] = '0';
      return arr.join('');
    }
    if (i === 0) {
      arr[i] = '0';
      return '1' + arr.join('');
    }
  }
}

console.log(solution([2, 4, 11, 7]));
