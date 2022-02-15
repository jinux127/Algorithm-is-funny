// 약수의 개수와 덧셈
// left	right	result
// 13	17	    43
// 24	27  	52
function solution(left, right) {
    var answer = 0;
    for (; left <= right; left++) {
        if(divisor(left) % 2 == 0){
            answer += left;
        } else {
            answer -= left;
        }
    }
    return answer;
}

function divisor(n){
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if(n % i == 0) cnt++;
    }
    return cnt;
}

console.log(solution(13,17));
