function solution(expression) {
  var answer = 0;
  const arr = expression.split(/(\D)/);
  let arr2 = [
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '-', '*'],
    ['+', '*', '-'],
  ];

  // for(let item of arr2){
  //   for(let aaa of arr){
  //     while(arr.includes(aaa)){
  //       const idx = arr.indexOf(aaa){

  //       }
  //     }
  //   }
  // }
  return answer;
}

console.log(solution('50*6-3*2'));
