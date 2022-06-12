function solution(p) {
  let answer = new Array(p.length).fill(0);
  const targetArr = [...p];

  console.log(answer);
  console.log(targetArr);
  for (let i = 0; i < targetArr.length; i++) {
    const targetNum = targetArr[i];
    let min = 1001;
    let minIndex = 1001;
    for (let j = i; j < targetArr.length; j++) {
      if (min > targetArr[j]) {
        min = targetArr[j];
        minIndex = j;
      }
    }

    if (targetNum !== min && minIndex !== 1001) {
      targetArr[minIndex] = targetNum;
      targetArr[i] = min;
      answer[minIndex] += 1;
      answer[i] += 1;
    }
  }

  return answer;
}

console.log(solution([2, 5, 3, 1, 4]));
