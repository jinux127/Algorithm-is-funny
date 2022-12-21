function solution(survey, choices) {
  const mbti = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => type.split('').forEach((char) => (mbti[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    mbti[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (mbti[b] > mbti[a] ? b : a)).join('');
}

function solution2(survey, choices) {
  const values = choices.map((choice) => choice - 4);
  const jipyo = { R: 1, T: 1, C: 2, F: 2, J: 3, M: 3, A: 4, N: 4 };
  const jipyo2 = [null, ['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
  const arr = [0, 0, 0, 0, 0];

  survey.forEach((sur, i) => {
    let [a, b] = sur.split('');
    let value = values[i];
    if (a > b) {
      const temp = a;
      a = b;
      b = temp;
      value *= -1;
    }

    arr[jipyo[a]] += value;
  });
  const temp = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    const resultValue = arr[i];

    if (resultValue > 0) temp.push(jipyo2[i][1]);
    else temp.push(jipyo2[i][0]);
  }

  return temp.join('');
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
