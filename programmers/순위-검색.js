// 정렬된 값으로 이진탐색해야함.
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === target) return mid;

    arr[mid] > target ? (right = mid - 1) : (left = mid + 1);
    mid = Math.floor((left + right) / 2);
  }

  return mid + 1;
};

const getInfos = (info) => {
  const infos = {}; // object를 생성해줄 거에요.
  info.forEach((infoString) => {
    // 이제 object에 `info`를 처리해줘야겠죠?!
    const arr = infoString.split(' '); // 먼저 " " 기준으로 string을 분리해줍시다.
    const score = parseInt(arr.pop()); // 정수로 바꿔줄 거에요.
    const key = arr.join(''); // key를 javabackendjuniorpizza와 같은 형태로 해줄 거에요.
    if (infos[key]) infos[key].push(score);
    else infos[key] = [score]; // [150]의 형태로 배열에 점수를 넣어줘요.
  });
  for (const key in infos) {
    // 다 처리된 이후에는 각 키의 점수 배열을 정렬해줍니다.
    // 이건 이분탐색을 위한 거에요.
    infos[key].sort((a, b) => a - b);
  }
  return infos;
};

function solution(info, query) {
  const query_table = [];
  const answer = [];
  const infos = getInfos(info);

  // info.map((item) => {
  //   const aaa = item.split(' ');
  //   const score = Number(aaa.pop());
  //   const keys = aaa.join('');

  //   infos[keys] ? infos[keys].push(score) : (infos[keys] = [score]);
  // });

  // Object.keys(infos).map((key) => infos[key].sort((a, b) => a - b));
  query
    .map(
      (q) =>
        q
          .split(/ and | |-/i) //' and '와 ' '와 '-'이 들어가 있는 친구들 기준으로 split 처리해줘요.
          .filter((v) => v !== '') // `split`에 의해 값이 "" 처리가 된 친구들을 없애줍니다.
    ) // 쿼리 조건들을 필터링해줄 거에요.
    .forEach((query) => {
      const score = query.pop();
      const result = Object.keys(infos)
        .filter((key) => query.every((v) => key.includes(v)))
        .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
      answer.push(result); // getResult로 인해 누산된 결과값을, answer에 넣어줍시다.
    });

  // query.map((items) => {
  //   query_table.push(items.split(/and|\s|-/).filter((item) => item));
  // });

  // query_table.map((query) => {
  //   const score = Number(query.pop());

  //   const result = Object.keys(infos)
  //     .filter((key) => query.every((v) => key.includes(v)))
  //     .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
  //   answer.push(result);
  // });

  return answer;
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
);
