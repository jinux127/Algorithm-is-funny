/**
 * 일정 금액 지불 => 10일 동안 회원
 * 회원일 경우 하루에 하나 할인
 * 원하는 제품과 수량이 할인하는 날짜와 10일 연속 일치할 경우 회원가입
 * ex) 바나나 3개 사과 2개  2개 돼지고기 2개 냄비 1개 want
 * 15일간 할인
 * 품목: 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나
 * @param {string[]} want 정현이가 원하는 제품 문자열 배열
 * @param {number[]} number 정현이가 원하는 제품의 수량 정수 배열
 * @param {string[]} discount 할인하는 제품을 나타내는 문자열 배열
 * @returns
 */
function solution(want, number, discount) {
  let answer = 0;
  const wishlist = [];
  want.forEach((wantItem, i) => {
    for (let j = 0; j < number[i]; j++) {
      wishlist.push(wantItem);
    }
  });
  let startIndex = 0;
  while (startIndex !== discount.length - 9) {
    let newArr = [...wishlist];

    for (let i = startIndex; i < startIndex + 10; i++) {
      if (newArr.includes(discount[i])) {
        newArr.splice(newArr.indexOf(discount[i]), 1);
      }
    }

    if (newArr.length === 0) {
      answer++;
    }
    startIndex++;
  }
  return answer;
}

function solution_fail(want, number, discount) {
  var answer = 0;
  const wantObj = {};
  want.forEach((wantItem, i) => {
    wantObj[wantItem] = number[i];
  });
  const history = [];
  for (let i = 0; i < discount.length; i++) {
    if (wantObj[discount[i]] !== undefined) {
      wantObj[discount[i]] -= 1;
      history.push({ want: discount[i], index: i });
    }

    history.forEach((hist) => {
      if (i - hist.index >= 10) wantObj[hist.want] += 1;
    });
    // console.log('now discount', discount[i]);
    // console.log(wantObj);
    let isWant = false;
    for (let j = 0; j < want.length; j++) {
      if (wantObj[want[j]] > 0) break;
      else isWant = true;
    }

    if (isWant) answer += 1;
  }
  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
