// 문자열 압축

// s	                        result
// "aabbaccc"	                7
// "ababcdcdababcdcd"	        9
// "abcabcdede"	                8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	        17

function solution(s) {
    let answer = s.length;
    
    for (let i = 1; i <= parseInt(s.length/2); i++) {
        let prev = s.substr(0, i);
        let cnt = 1;
        let temp = '';
        
        for(let j = i; j<s.length; j+=i){
            const cur = s.substr(j,i);

            if(prev === cur) {
                cnt++;
            } else {
                temp += (cnt >1 ? String(cnt) : '')  + prev;
                cnt = 1;
                prev = cur;
            }
        }
        temp += (cnt > 1 ? String(cnt): '') + prev;

        answer = Math.min(answer, temp.length);
    }
    console.log(answer)
    return answer;
}

solution("aabbaccc")