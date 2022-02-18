// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {

    return arr.filter(i=>i%divisor == 0).length ==0 ? [-1] : arr.filter(i=>i%divisor == 0).sort((a,b)=>a-b);
}

console.log(solution([5, 9, 7, 10], 11));