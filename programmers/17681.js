// 비밀지도

function solution(n, arr1, arr2) {
    var answer = arr1.map((cur,i) => {
        let ttt = (cur | arr2[i]).toString(2);
        if(n > ttt.length) ttt = new Array(n-ttt.length+1).join('0') + ttt;
        return ttt.replace(/1/gi,"#").replace(/0/gi," ");
    })
    
    return answer;
}

console.log(solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]))