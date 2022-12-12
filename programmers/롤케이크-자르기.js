/**
 * 동일한 가짓수를 가지게 나누기
 * 불가능할 경우 0
 * @param {number[]} topping 토핑들의 번호 정수배열
 * @returns
 */
function solution(topping) {
  const leftToppingType = new Set();
  const toppingInfo = {};

  let answer = 0;
  let type_count = 0;

  topping.forEach((toppingItem) => {
    if (toppingInfo[toppingItem]) toppingInfo[toppingItem]++;
    else {
      toppingInfo[toppingItem] = 1;
      type_count++;
    }
  });

  topping.forEach((toppingItem) => {
    leftToppingType.add(toppingItem);
    toppingInfo[toppingItem]--;

    if (!toppingInfo[toppingItem]) type_count--;
    if (leftToppingType.size === type_count) answer++;
  });

  return answer;
}

function solution_success(topping) {
  const elementNumber = new Map();
  topping.forEach((v) => {
    if (elementNumber.has(v)) {
      const val = elementNumber.get(v);
      val.duplicated++;
      elementNumber.set(v, val);
    } else {
      elementNumber.set(v, { duplicated: 1, visited: false });
    }
  });

  let result = 0;
  let [me, brother] = [0, elementNumber.size];

  for (let i = 0; i < topping.length; i++) {
    const val = elementNumber.get(topping[i]);

    if (val.duplicated >= 1) {
      // duplicated 는 종류
      val.duplicated--;

      // 종류가 0이면 brother 종류 1개 감소
      if (val.duplicated === 0) brother--;
    }

    if (!val.visited) {
      val.visited = true;
      me++;
    }

    elementNumber.set(topping[i], val);

    if (me === brother) result++;
  }

  return result;
}

// 시간초과
function solution_fail(topping) {
  var answer = -1;
  let count = 0;
  for (let i = 0; i < topping.length; i++) {
    const headArr = [...topping.slice(0, i)];
    const tailArr = [...topping.slice(i, topping.length)];
    if (new Set(headArr).size === new Set(tailArr).size) count += 1;
  }
  return count;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
