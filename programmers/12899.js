// 124 나라의 숫자
// 입출력 예
// n	result
// 1	1
// 2	2
// 3	4
// 4	11

function solution(n) {
    const number124 = [4, 1, 2];
    var answer = '';

    while(n){
        answer = number124[n%3] + answer;
        n = (n%3 ==0)? n/3 -1 : Math.floor(n/3);
    }
    console.log(answer)
    return answer;
}

solution(11)