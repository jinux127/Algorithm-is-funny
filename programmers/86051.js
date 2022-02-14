//없는 숫자 더하기

let numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    var answer = -1;
    let a = 0;
    for (let i = 0; i < 10; i++) {
        a += i;
    }
    for(let i = 0; i<10; i++){
        if(numbers.indexOf(i) != -1) a -= i;
    }
    console.log(a);
    return a;
}

solution(numbers);
