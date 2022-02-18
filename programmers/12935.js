// 제일 작은 수 제거하기

function solution(arr) {
    if(arr.length >1){
        let min = Math.min(...arr);
        let idx = arr.indexOf(min);
        arr.splice(idx,1);
        
    } else {
        arr = [-1]
    }
    return arr;
}
console.log(solution([4,3,2,1]));