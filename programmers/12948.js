// 핸드폰 번호 가리기

function solution(phone_number) {
    let length = phone_number.length;
    return phone_number.slice(-4).padStart(length,"*");
}

console.log(solution("01033334444"));