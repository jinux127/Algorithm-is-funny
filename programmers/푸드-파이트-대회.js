/**
 *
 * @param {number[]} food 음식의 양 칼로리 적은 순
 * @returns
 */
function solution(food) {
  var answer = '';
  // 배열 두개로 앞 뒤
  const headerArr = [];
  const tailArr = [];

  for (let i = 1; i < food.length; i++) {
    let foodCount = food[i];

    while (foodCount > 1) {
      headerArr.push(i);
      tailArr.push(i);
      foodCount -= 2;
    }
  }

  return headerArr.join('') + '0' + tailArr.reverse().join('');
}
