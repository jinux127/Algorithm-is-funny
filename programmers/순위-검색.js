function solution(info, query) {
  const info_table = [];
  const query_table = [];
  const result = [];

  info.map((items) => {
    const aaa = items.split(' ');

    info_table.push({
      language: aaa[0],
      type: aaa[1],
      career: aaa[2],
      food: aaa[3],
      score: aaa[4],
    });
  });

  query.map((items) => {
    query_table.push(items.split(/and|\s/).filter((item) => item));
  });

  for (let i = 0; i < query_table.length; i++) {
    const qry = query_table[i];
    let cnt = 0;
    for (let info of info_table) {
      if (
        (qry[0] === '-' || info.language === qry[0]) &&
        (qry[1] === '-' || info.type === qry[1]) &&
        (qry[2] === '-' || info.career === qry[2]) &&
        (qry[3] === '-' || info.food === qry[3]) &&
        Number(info.score) >= Number(qry[4])
      ) {
        cnt += 1;
      }
    }
    result.push(cnt);
  }

  return result;
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
