function solution(n, plans, clients) {
  let answer = new Array(clients.length).fill(0);
  // n 부가서비수 수
  // plans 요금제 정보 배열
  // clients 고객이 이용하려는 서비스 정보를 담은 문자열
  let serviceArr = [];
  let addService = [];

  plans.map((item) => {
    const arr = item.split(' ').map(Number);
    const data = arr.shift();
    addService.push(...arr);
    serviceArr.push([data, [...addService]]);
  });

  for (let i = 0; i < clients.length; i++) {
    const client = clients[i].split(' ').map(Number);
    const targetData = client.shift();
    const targetServiceArr = client;

    client: for (let j = 0; j < serviceArr.length; j++) {
      const data = serviceArr[j][0];
      const service = serviceArr[j][1];
      if (data < targetData) {
        continue client;
      }

      for (let k = 0; k < targetServiceArr.length; k++) {
        if (service.indexOf(targetServiceArr[k]) === -1) continue client;
      }
      answer[i] = j + 1;
      break;
    }
  }

  return answer;
}

console.log(solution(5, ['100 1 3', '500 4', '2000 5'], ['300 3 5', '1500 1', '100 1 3', '50 1 2']));
