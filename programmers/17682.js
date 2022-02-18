// 다트 게임


// S: ^1, D: ^2, T: ^3
function solution(dartResult) {
    const answer = [];
    let temp = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])){
            if(dartResult[i]==='1' && dartResult[i+1]==='0'){
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        }
        else if(dartResult[i] == 'S') answer.push(temp);
        else if(dartResult[i] == 'D') answer.push(temp ** 2);
        else if(dartResult[i] == 'T') answer.push(temp ** 3);
        else if(dartResult[i] == '#') answer[answer.length-1] *= (-1);
        else if(dartResult[i] == '*') {
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        }
        console.log(temp);
        console.log(`answer: ${answer[answer.length-1]}`);
    }
    
    return answer.reduce((acc,cur)=>acc + cur,0);
}


console.log(solution("1D2S#10S"));