function solution(ingredient) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);

    if (
      arr.length >= 4 &&
      arr[arr.length - 1] === 1 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 4] === 1
    ) {
      answer += 1;
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
    }
  }
  return answer;
}
