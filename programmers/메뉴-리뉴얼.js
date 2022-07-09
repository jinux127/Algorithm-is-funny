const combinations = function (menu, order, cnt, idx, prev) {
  if (prev.length === cnt) {
    let curStr = prev.sort().join(''); // 기존 주문 배열 내 원소가 주문 횟수만큼 있다면 원소들 문자로 생성

    // 메뉴 객체에 기존 메뉴가 존재한다면 해당 메뉴 주문 횟수에 +1, 아니라면 새로 생성
    if (menu.has(curStr)) menu.set(curStr, menu.get(curStr) + 1);
    else menu.set(curStr, 1);
  }

  // 기존 인덱스부터 문자열 하나씩 추가한 후 조합 재귀
  for (let i = idx; i < order.length; i++) {
    combinations(menu, order, cnt, i + 1, [...prev, order[i]]);
  }
};

function solution(orders, course) {
  let menu = new Map(); // Map객체 생성: [['문자열 조합', 주문 횟수], ['문자열 조합', 주문 횟수], ...]

  // 조합으로 주문 횟수에 따른 menu객체 완성시키기
  orders.map((order) => {
    course.map((cnt) => combinations(menu, order, cnt, 0, []));
  });

  // 주문 횟수 2회 이상인 메뉴들로 필터링
  menu = [...menu.entries()].filter((elem) => elem[1] >= 2).sort((a, b) => b.length - a.length);

  let result = [];
  course.map((cnt) => {
    let max = 0;
    let tmp = menu.filter(([str, num]) => {
      if (max < num && str.length === cnt) max = num;
      return str.length === cnt;
    });
    tmp.filter((x) => x[1] === max).map((x) => result.push(x[0]));
  });

  // return 시 오름차순
  return result.sort();
}
// function solution(orders, course) {
//   var answer = [];
//   const menu = new Set(...orders.map((item) => item.split('')));

//   return answer;
// }

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
