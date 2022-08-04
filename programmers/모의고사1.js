// 1
function solution1(X, Y) {
  var answer = '-1';
  const arr_X = X.split('');
  const arr_Y = Y.split('');
  const pairArr = [];
  for (let i = 0; i < arr_X.length; i++) {
    const pairIndex = arr_Y.indexOf(arr_X[i]);
    if (pairIndex !== -1) {
      pairArr.push(arr_X[i]);
      arr_Y[pairIndex] = 'x';
    }
  }

  let result = pairArr.sort((a, b) => b - a).join('');

  if (result[0] === '0') result = '0';

  return pairArr.length ? result : answer;
}

// 2

function solution2(want, number, discount) {
  var answer = 0;
  const obj = {};
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 9; i++) {
    let dc = discount.slice(i, i + 10);
    let cnt = 0;
    want.map((item) => {
      if (obj[item] <= dc.filter((item2) => item2 === item).length) cnt += 1;
    });
    if (cnt === want.length) answer += 1;
  }

  return answer;
}

//3

function solution3(order) {
  const container_A = [];
  const truck = [];
  let left = 0;
  for (let i = 1; i <= order.length; i++) {
    container_A.push(i);
    while (container_A && left < order.length && order[left] === container_A[container_A.length - 1]) {
      truck.push(container_A.pop());
      left += 1;
    }
  }

  return truck.length;
}
