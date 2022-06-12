function solution(periods, payments, estimates) {
  var answer = [0, 0];
  // 1. 이번 달 아니고 VIP가 아니고 다음달에 VIP가 되는 고객
  // 2. 이번 달 VIP 이고 다음달에 VIP가 아니게 되는 고객
  // periods: 가입기간 배열
  // payments: 납부 내역 배열
  // estimates: 다음달에 납부 예정 금액
  const year = 12;
  for (let i = 0; i < periods.length; i++) {
    const period = periods[i] / year;
    const nextPeriod = (periods[i] + 1) / year;

    if (nextPeriod < 2) continue;

    const beforeSum = payments[i].reduce((acc, cur) => acc + cur, 0);
    const afterSum = beforeSum - payments[i][0] + estimates[i];

    let isVIP = false;
    let isNextVIP = false;

    if (period >= 2 && period < 5) {
      if (beforeSum >= 900000) {
        isVIP = true;
      }
    } else if (period >= 5) {
      if (beforeSum >= 600000) {
        isVIP = true;
      }
    }

    if (nextPeriod >= 2 && nextPeriod < 5) {
      if (afterSum >= 900000) {
        isNextVIP = true;
      }
    } else if (nextPeriod >= 5) {
      if (afterSum >= 600000) {
        isNextVIP = true;
      }
    }

    if (isVIP) {
      if (!isNextVIP) {
        answer[1] += 1;
      }
    }

    if (!isVIP) {
      if (isNextVIP) {
        answer[0] += 1;
      }
    }
  }

  // return [1의 경우의 수, 2의 경우의 수]
  return answer;
}

console.log(solution());
