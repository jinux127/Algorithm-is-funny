// 가운데 글자 가져오기

function solution(s) {
    return s.length %2 == 0 ?s.substr(s.length/2,2): s.substr(s.lengtG/2,1);
}

console.log(solution("abcde"));