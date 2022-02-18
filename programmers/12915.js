// 문자열 내마음대로 정렬하기

function solution(strings, n) {
    return strings.sort((a,b)=>a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}

console.log(solution(["sun", "bed", "car"],1 ));