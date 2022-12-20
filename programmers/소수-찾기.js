function solution(numbers) {
  const arr = numbers.split('');
  const temp = [];
  const visited = new Array(numbers.length).fill(false);
  const result = [];

  const permutation = (cnt, targetNumber) => {
    let str = '';
    if (cnt === targetNumber) {
      for (let i = 0; i < temp.length; i++) {
        str += temp[i];
      }
      result.push(str.trim());
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      temp.push(arr[i]);
      permutation(cnt + 1, targetNumber);
      temp.pop();
      visited[i] = false;
    }
  };

  for (let i = 1; i <= numbers.length; i++) {
    permutation(0, i);
  }

  return [...new Set(result.map(Number).filter(isPrime))].length;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

console.log(solution('011'));
