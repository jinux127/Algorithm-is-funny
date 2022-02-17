// 부족한 금액 계산하기

function solution(price, money, count) {
    for (let i = 1; i <= count; i++) {
        money -= price * i;
    }
    return money < 0 ? Math.abs(money) : 0;
}

console.log(solution(3,20,4))